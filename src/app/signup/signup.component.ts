import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private http: HttpClient) {}
   usersData: any[] = [];
  signupform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

    ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((data) => {
      this.usersData = data;
    });
  }

  

  public signup() {
   

    const users = {
      name: this.signupform.value.name,
      email: this.signupform.value.email,
      password: this.signupform.value.password
    };

    const emailexist = this.usersData.some(user => user.email === users.email);

      if (emailexist) {
    alert('Email already exists. Please use a different email.');
    return; // stop further execution
  }

   

    this.http.post('http://localhost:3000/users', users).subscribe((data) => {
      console.log(data);
    });

    

    

  }
}

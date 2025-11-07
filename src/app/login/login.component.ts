import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  conformadmin: any[] = [];
  private apiUrl = 'http://localhost:3000/users'; 

  conformadminisreal :any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((data) => {
      this.conformadmin = data;
    });

    
  }
  login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

checkUserLogin(name: string): Observable<boolean> {
  return this.http.get<any[]>(`${this.apiUrl}?name=${name}`).pipe(
    map(users => {
      this.conformadminisreal = users.length > 0;
      return this.conformadminisreal;
    })
  );
}


loginserver() {
  const adminuser = {
    name: this.login.value.name ?? '',
    email: this.login.value.email ?? '',
    password: this.login.value.password ?? '',
  };

  this.checkUserLogin(adminuser.name).subscribe((exists) => {
    if (!exists) {
      alert('Wrong Admin Credentials. Please try again.');
      return;
    }
    
      
    // Now we know user exists — check admin credentials
    const admin = {
      email: 'admin',
      password: 'admin'
    };

    this.authService.login(admin.email, admin.password).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        alert('Login Successful!');
        this.router.navigate(['admin/recipe']);
      } else {
        alert('Authentication failed.');
      }
    });
  });
}
}

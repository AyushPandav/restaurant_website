import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipt-login',
  imports: [],
  templateUrl: './recipt-login.component.html',
  styleUrl: './recipt-login.component.css'
})
export class ReciptLoginComponent implements OnInit{
  userData :any[] = []
  user : any = {}
  constructor(private http: HttpClient, private router: Router){

  }
  recieptform = new FormGroup({
    email: new FormControl(''),
    password : new FormControl('')
  })

   ngOnInit(): void {
     this.http.get<any[]>('http://localhost:3000/bookings').subscribe((data) => {
      this.userData = data;
    });
   }

   recieptlogin(){
      const users = {
        email : this.recieptform.value.email,
        password: this.recieptform.value.password
      }

      this.user = users;

      const recieptexist = this.userData.some(user => user.email === users.email && user.password === users.password);

      if(!recieptexist){
            this.router.navigate(['/reciept'], { queryParams: this.user });
      }
   }
}

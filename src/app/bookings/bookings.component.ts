import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  constructor(private http: HttpClient){

  }


    formbooking = new FormGroup({
       name : new FormControl(''),
       phone : new FormControl(''),
       password: new FormControl(''),
       email : new FormControl(''),
       seats : new FormControl(''),
       date : new FormControl(''),
       time : new FormControl('')
    });



    store(){

      if (this.formbooking.valid) {
      let data = this.formbooking.value;

      this.http.post<any>('http://localhost:3000/bookings', data).subscribe((res) => {
        console.log('Booking saved:', res);
        alert('The booking is done');
        this.formbooking.reset(); // ✅ clear form after save
      });
    } else {
      alert('Please fill in all fields');
    }
  }


}

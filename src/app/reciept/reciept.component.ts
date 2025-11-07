import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reciept',
  imports: [],
  templateUrl: './reciept.component.html',
  styleUrl: './reciept.component.css'
})
export class RecieptComponent implements OnInit{
constructor(private route: ActivatedRoute, private http: HttpClient){

}

data: any

userdata : any;

ngOnInit(): void {
  this.route.queryParamMap.subscribe(params =>{
    this.userdata = params;
    console.log(this.userdata)  
  });

  this.http.get<any[]>('http://localhost:3000/bookings').subscribe((data) => {
      this.data = data;
    });
}



}

import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
   addthisrecipes :any[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/recipes').subscribe((data) =>{
       this.addthisrecipes = data;
    });
  }

  
}

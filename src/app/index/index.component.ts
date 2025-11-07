import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './../components/header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}

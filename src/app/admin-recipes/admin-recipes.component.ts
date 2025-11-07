import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-recipes',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin-recipes.component.html',
  styleUrl: './admin-recipes.component.css'
})
export class AdminRecipesComponent {
  recipes =  new FormGroup({
    addFood : new FormControl(''),
    addPrice : new FormControl(''),
    addDes : new FormControl(''),
    addImg : new FormControl(''), 
  });
  private apiUrl = 'http://localhost:3000/recipes';
  fileBase64: string | null = null;

  constructor(private http : HttpClient){}
    // onFileChange(event: any) {
    //   const file = event.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file); // Convert file to Base64
    //     reader.onload = () => {
    //       this.fileBase64 = reader.result as string;
    //     };
    //   }
    // }

  addtomenu(){
    let addrecipe = {
      foodname : this.recipes.value.addFood,
      foodprice : this.recipes.value.addFood,
      fooddes : this.recipes.value.addFood,
      foodimg : this.recipes.value.addImg
    }

    this.http.post(this.apiUrl, addrecipe).subscribe({
      next: (response) => {
        console.log('✅ Recipe added:', response);
        alert('the food has been added too inventory')
      },
      error: (error) => {
        console.error('❌ Error adding recipe:', error);
      }
    });

    
  }
}

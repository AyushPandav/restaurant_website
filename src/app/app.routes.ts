import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminRecipesComponent } from './admin-recipes/admin-recipes.component';
import { AuthGuard } from './auth.guard';
import { ReciptLoginComponent } from './recipt-login/recipt-login.component';
import { RecieptComponent } from './reciept/reciept.component';

export const routes: Routes = [
    {path:'', component:IndexComponent},
    {path:'about', component:AboutComponent},
    {path:'menu', component:MenuComponent},
    {path:'contact', component:ContactComponent},
    {path:'booking', component:BookingsComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path: 'admin/recipe', 
    component: AdminRecipesComponent, 
    canActivate: [AuthGuard]},
    {path: 'reciept-login', component:ReciptLoginComponent},
    {path:'reciept', component:RecieptComponent}
];

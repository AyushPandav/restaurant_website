import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './Services/auth.service'; // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isUserLoggedIn$.pipe(
      take(1), // take the latest value
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true; // allow access
        } else {
          this.router.navigate(['/login']); // redirect to login
          return false; // block access
        }
      })
    );
  }

  
}

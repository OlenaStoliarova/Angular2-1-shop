import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(isAdmin: boolean): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        this.isAdmin = isAdmin;
        if (isAdmin) {
          console.log('logged in as Admin');
        } else {
          console.log('logged in as User');
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    console.log('logged out');
  }
}

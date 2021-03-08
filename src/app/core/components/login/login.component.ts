import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public authService: AuthService,
    private router: Router
) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  onLogin(isAdmin: boolean = false) {
    const observer = {
      next: () => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : this.authService.isAdmin ? '/admin' : '/product-list';
          // Redirect the user
          this.router.navigate([redirect]);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login(isAdmin)
      // The TakeUntil subscribes and begins mirroring the source Observable.
      // It also monitors a second Observable that you provide.
      // If this second Observable emits an item or sends a termination notification,
      // the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout() {
      this.authService.logout();
  }
}

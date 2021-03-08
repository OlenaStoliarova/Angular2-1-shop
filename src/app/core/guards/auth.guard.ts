import { Injectable } from '@angular/core';
import {
  Router,
  UrlTree,
  CanLoad,
  Route,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('CanActivate Guard is called');
    const { url } = state;
    return this.checkLogin(url) as boolean;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivateChild Guard is called');
    const { url } = state;
    return this.checkLogin(url) as boolean;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('CanLoad Guard is called');
    const url = `/${route.path}`;
    return this.checkLogin(url) as boolean;
  }

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      this.authService.redirectUrl = undefined;
      if (this.authService.isAdmin) {
        return true;
      } else {
        this.router.navigate(['/403']);
        return false;
      }
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page, return UrlTree
    this.router.navigate(['/login']);
    return false;
  }

}

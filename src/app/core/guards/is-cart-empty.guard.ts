import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {

  constructor(private cartServise: CartService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('CanLoad IsCartEmptyGuard is called');
    if (this.cartServise.isEmptyCart()) {
      alert('Your cart is empty');
    }
    return !this.cartServise.isEmptyCart();
  }

}

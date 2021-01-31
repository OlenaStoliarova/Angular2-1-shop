import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new Subject<Array<CartItem>>();
  public cart$ = this.cart.asObservable();

  private cartItems: Map<number, CartItem> = new Map();

  constructor() { }

  addItem(item: CartItem): void {
    console.log(this.cartItems);
    if(this.cartItems.has(item.id)) {
        const existingItem = this.cartItems.get(item.id);
        existingItem.count++;
    } else {
        this.cartItems.set(item.id, item);
    }
    this.pushNewCartStateToSubscribers();
  }

  private pushNewCartStateToSubscribers() {
    this.cart.next(Array.from(this.cartItems.values()));
  }

}

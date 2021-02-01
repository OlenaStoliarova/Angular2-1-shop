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

  incrementItem(itemId: number): void {
    if(this.cartItems.has(itemId)) {
      const existingItem = this.cartItems.get(itemId);
      existingItem.count++;
    }
    this.pushNewCartStateToSubscribers();
  }

  decrementItem(itemId: number): void {
    if(this.cartItems.has(itemId)) {
      const existingItem = this.cartItems.get(itemId);
      existingItem.count--;
      if(existingItem.count < 1) {
        this.cartItems.delete(itemId);
      }
    }
    this.pushNewCartStateToSubscribers();
  }

  removeItem(itemId: number): void {
    this.cartItems.delete(itemId);
    this.pushNewCartStateToSubscribers();
  }

  getTotalQuantity(): number {
    let totalCount = 0;
    Array.from(this.cartItems.values()).forEach(value => totalCount += value.count);
    return totalCount;
  }

  getTotalAmount(): number {
    let total = 0;
    Array.from(this.cartItems.values()).forEach(value => total += value.count * value.price);
    return total;
  }

  private pushNewCartStateToSubscribers() {
    this.cart.next(Array.from(this.cartItems.values()));
  }

}

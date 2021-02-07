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
  private totalQuantity: number;
  private totalSum: number;

  constructor() { }

  getProducts(): Array<CartItem> {
    return Array.from(this.cartItems.values());
  }

  addItem(item: CartItem): void {
    console.log(this.cartItems);
    if(this.cartItems.has(item.id)) {
        const existingItem = this.cartItems.get(item.id);
        if(isNaN(item.count)) {
          existingItem.count++;
        } else {
          existingItem.count += item.count;
        }       
    } else {
        this.cartItems.set(item.id, item);
    }
    this.pushNewCartStateToSubscribers();
  }
  
  removeItem(itemId: number): void {
    this.cartItems.delete(itemId);
    this.pushNewCartStateToSubscribers();
  }

  incrementQuantity(itemId: number): void {
    this.changeQuantity(itemId, 1);
  }

  decrementQuantity(itemId: number): void {
    this.changeQuantity(itemId, -1);
  }

  removeAllProducts() {
    this.cartItems.clear();
    this.pushNewCartStateToSubscribers();
  }

  isEmptyCart(): boolean {
    return this.cartItems.size === 0;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  private changeQuantity(itemId: number, changeQuantityOn: number) {
    if(this.cartItems.has(itemId)) {
      const existingItem = this.cartItems.get(itemId);
      existingItem.count += changeQuantityOn;
      if(existingItem.count < 1) {
        this.cartItems.delete(itemId);
      }
    }
    this.pushNewCartStateToSubscribers();
  }

  private updateCartData() {
    let totalQuantity = 0;
    let totalSum = 0;
    Array.from(this.cartItems.values()).forEach(value => {
      totalQuantity += value.count;
      totalSum += value.count * value.price;
    });
    this.totalQuantity = totalQuantity;
    this.totalSum = totalSum;
  }

  private pushNewCartStateToSubscribers() {
    this.updateCartData();
    this.cart.next(Array.from(this.cartItems.values()));
  }

}

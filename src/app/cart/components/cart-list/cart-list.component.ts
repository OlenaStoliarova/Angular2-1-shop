import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  cart: Array<CartItem> = [];
  orderByKey = 'name';
  isAsc = true;

  private subscriptionOnCartServiceChannel: Subscription;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.subscriptionOnCartServiceChannel = this.cartService.cart$.subscribe(
      data => this.cart = data);
  }

  ngOnDestroy() {
    this.subscriptionOnCartServiceChannel.unsubscribe();
  }

  onPlusItem(itemId: number) {
    this.cartService.incrementQuantity(itemId);
  }

  onMinusItem(itemId: number) {
    this.cartService.decrementQuantity(itemId);
  }

  onRemoveItem(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  isEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  getTotalAmount(): string {
    return this.cartService.getTotalSum().toFixed(2);
  }

  trackByItems(index: number, item: CartItem): string {
    return item.id + ':' + item.count;
  }
}
// linter


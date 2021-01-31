import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: CartItem;
  @Output() incrementItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() decrementItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onLess() {
      this.decrementItem.emit(this.item.id);
  }

  onMore() {
    this.incrementItem.emit(this.item.id);
  }

  onRemove() {
    this.removeItem.emit(this.item.id);
  }

}

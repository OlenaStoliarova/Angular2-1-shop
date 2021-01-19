import { Injectable } from '@angular/core';

import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<Product>;

  constructor() { }

  addItem(item: Product) {
    this.cartItems.push(item);
  }
}

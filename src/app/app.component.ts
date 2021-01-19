import { Component } from '@angular/core';

import { Product } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems: Array<Product> = [];

  title = 'shop';
  shopName = 'Happy Birds';

  onAddToCart(item: Product): void {
      console.log('onAddToCart method', item);
      this.cartItems.push(item);
  }
}

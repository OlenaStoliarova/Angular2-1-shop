import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input()
  cart: Array<Product>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  trackByItems(index: number, item: Product): number {
    return item.id;
  }
}

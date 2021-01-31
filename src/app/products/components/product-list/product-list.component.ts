import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartItem } from 'src/app/cart/models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    console.log('ProductListComponent onBuy');    
    this.cartService.addItem(new CartItem(product.id, product.name, product.price, 1));
  }
}

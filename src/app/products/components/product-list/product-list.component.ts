import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  products: Array<Product>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(item: Product) {
    console.log(item.name + ' was added to cart.');
    this.addToCart.emit(item);
  }
}

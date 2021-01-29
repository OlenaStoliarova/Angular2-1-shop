import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  onBuy(product: Product): void {
    console.log('add ' + product.name + ' to cart');
    this.addProduct.emit(product);
  }

}

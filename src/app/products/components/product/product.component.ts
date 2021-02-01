import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addProductEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  onBuy(): void {
    console.log('add ' + this.product.name + ' to cart');
    this.addProductEvent.emit(this.product);
  }

}

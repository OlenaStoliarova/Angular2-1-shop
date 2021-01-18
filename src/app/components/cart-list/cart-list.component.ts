import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}

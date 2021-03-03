import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-banner',
  templateUrl: './cart-banner.component.html',
  styleUrls: ['./cart-banner.component.css']
})
export class CartBannerComponent {

  constructor(
    private cartService: CartService
  ) { }
}

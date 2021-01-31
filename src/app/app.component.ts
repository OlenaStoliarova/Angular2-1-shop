import { Component } from '@angular/core';

import { Product } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  shopName = 'Happy Birds';
}

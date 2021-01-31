import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Product } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') titleField: ElementRef<HTMLElement>;

  title = 'shop';
  shopName = 'Happy Birds';

  ngAfterViewInit() {
    this.titleField.nativeElement.textContent = 'Welcome to ' + this.shopName + '! A place where you can buy everything you need!';
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    FirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    FirstComponent
  ]
})
export class ProductsModule { }

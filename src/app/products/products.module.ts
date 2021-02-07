import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    FirstComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent,
    FirstComponent
  ]
})
export class ProductsModule { }

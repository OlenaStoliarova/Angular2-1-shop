import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartModule } from '../cart/cart.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    FirstComponent,
    ProductViewComponent,
    ProductsComponent
  ],
  imports: [
    SharedModule,
    CartModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent,
    FirstComponent
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartBannerComponent, CartItemComponent, CartListComponent } from './components';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartBannerComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [
    CartBannerComponent
  ]
})
export class CartModule { }

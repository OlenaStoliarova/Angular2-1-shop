import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';

import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/uk';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { TimingInterceptor } from './core/interceptors/timing.interceptor';

registerLocaleData(localeUa, 'uk-UA');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    CartModule,
    CoreModule,
    OrdersModule,
    // MUST BE LAST
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
}
 }

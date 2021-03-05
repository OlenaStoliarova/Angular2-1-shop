import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';

const routes: Routes = [
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    {
      path: 'order',
      canActivate: [IsCartEmptyGuard],
      component: ProcessOrderComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

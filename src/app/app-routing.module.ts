import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenPageComponent } from './core/components/forbidden-page/forbidden-page.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';
import { ConfirmedOrderComponent } from './orders/components/confirmed-order/confirmed-order.component';
import { ProcessOrderComponent } from './orders/components/process-order/process-order.component';

const routes: Routes = [
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    {
      path: 'order',
      canActivate: [IsCartEmptyGuard],
      component: ProcessOrderComponent
    },
    {
      path: 'order-confirmed',
      component: ConfirmedOrderComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'admin',
      canLoad: [AuthGuard],
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: '403',
      component: ForbiddenPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

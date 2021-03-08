import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent, ProductFormComponent, ManageOrdersComponent } from './components';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: 'products/add', component: ProductFormComponent },
          { path: 'products/edit/:productID', component: ProductFormComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ProductFormComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ];
}

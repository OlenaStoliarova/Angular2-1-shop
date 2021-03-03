import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent, ProductViewComponent } from './components';
import { ProductsComponent } from './products.component';

const routes: Routes = [
{
    path: '',
    component: ProductsComponent,
    children: [
          {
            path: 'product-list',
            component: ProductListComponent
          },
          {
            path: 'product/:id',
            component: ProductViewComponent
          }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProductsRoutingModule { }

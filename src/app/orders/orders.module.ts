import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConfirmedOrderComponent } from './components/confirmed-order/confirmed-order.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ ProcessOrderComponent, ConfirmedOrderComponent ]
})
export class OrdersModule { }

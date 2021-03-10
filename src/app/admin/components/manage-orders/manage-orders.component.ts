import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/orders/models/order.model';
import { OrdersService } from 'src/app/orders/services/orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders: Promise<Array<Order>>;

  constructor(private odersService: OrdersService) { }

  ngOnInit() {
    this.orders = this.odersService.getOrders();
  }

}

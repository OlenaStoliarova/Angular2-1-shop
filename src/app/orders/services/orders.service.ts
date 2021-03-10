import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order.model';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Promise<Order[]> {
    return this.http
      .get(this.ordersUrl)
      .toPromise()
      .then(response => response as Order[])
      .catch(this.handleError);
  }

  getOrder(id: number): Promise<Order> {
    const url = `${this.ordersUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Order)
      .catch(this.handleError);
  }

  updateOrder(order: Order): Promise<Order> {
    const url = `${this.ordersUrl}/${order.id}`;
    const body = JSON.stringify(order);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as Order)
      .catch(this.handleError);
  }

  createOrder(order: Order): Promise<Order> {
    const url = this.ordersUrl;
    const body = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as Order)
      .catch(this.handleError);
  }

  deleteOrder(order: Order): Promise<Order> {
    const url = `${this.ordersUrl}/${order.id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        // json-server return empty object
        // so we don't use .then(...)
        .catch(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

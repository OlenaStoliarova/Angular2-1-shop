import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, publish, refCount, catchError, share } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(url)
        .pipe(
            retry(3),
            share(), // = publish() + refCount()
            catchError(this.handleError)
          );
  }

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

     return throwError('Something bad happened; please try again later.');
  }
}

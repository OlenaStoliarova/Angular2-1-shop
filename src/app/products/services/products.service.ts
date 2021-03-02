import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductCategory } from '../models/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    new Product(1, 'Cage No.2', '40x50x65', 3500, ProductCategory.CAGES, true, '/assets/images/products/cage-2.jpg'),
    new Product(2, 'Sepia Shell', 'Big sepia shell',  80,  ProductCategory.FOOD, false, '/assets/images/products/sepia1.jpg'),
    new Product(3, 'Sepia Shell (2pcs)', 'Pack of 2 normal size sepia shells', 120, ProductCategory.FOOD, true, '/assets/images/products/sepia2.png'),
    new Product(4, 'Ladder', '30 cm', 90, ProductCategory.TOYS,  true, '/assets/images/products/ladder.jpg'),
    new Product(5, 'Water Bowl', 'Stainless Steel', 50, ProductCategory.ACCESSORIES,  false, '/assets/images/products/water-bowl.jpg')
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
      return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    return of(this.products.find(product => product.id === id));
  }
}

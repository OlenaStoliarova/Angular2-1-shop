import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductCategory } from '../models/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
      return [
        new Product(1, 'Cage No.2', '40x50x65', 3500, ProductCategory.CAGES, true),
        new Product(2, 'Sepia Shell', 'Big sepia shell',  80,  ProductCategory.FOOD, false),
        new Product(3, 'Sepia Shell (2pcs)', 'Pack of 2 normal size sepia shells', 120, ProductCategory.FOOD, true),
        new Product(4, 'Ladder', '30 cm', 90, ProductCategory.TOYS,  true),
        new Product(5, 'Water Bowl', 'Stainless Steel', 50, ProductCategory.ACCESSORIES,  false)
      ];
  }
}

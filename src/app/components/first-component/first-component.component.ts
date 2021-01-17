import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/ProductCategory';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  shopName: string;
  testProductList: Product[];

  constructor() {
  }

  ngOnInit() {
    this.shopName = 'Happy Birds';
    this.testProductList =
      [
        {'name': 'Cage No.2', 'description': '40x50x65', 'price': 3500, 'category': ProductCategory.CAGES, 'isAvailable': true},
        {'name': 'Sepia Shell', 'description': 'Big sepia shell', 'price': 80, 'category': ProductCategory.FOOD, 'isAvailable': false},
        {'name': 'Sepia Shell (2pcs)',
          'description': 'Pack of 2 normal size sepia shells', 'price': 120, 'category': ProductCategory.FOOD, 'isAvailable': true},
        {'name': 'Ladder', 'description': '30 cm', 'price': 90, 'category': ProductCategory.TOYS, 'isAvailable': true}
      ];
  }

}

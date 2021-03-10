import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}

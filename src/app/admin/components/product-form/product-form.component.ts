import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { CanComponentDeactivate } from 'src/app/core/interfaces/can-component-deactivate.interface';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Product } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate  {
  public product: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private dialogService: DialogService) { }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('productID'));
    this.productService.getProduct(id).subscribe(product =>
      this.product = { ...product }
      );
  }

  canDeactivate():
    | boolean | Promise<boolean> | Observable<boolean> {
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }


}

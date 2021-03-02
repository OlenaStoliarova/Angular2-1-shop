import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/cart/models/cart-item.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.productService.getProduct(id).subscribe(data => this.product = data);
  }

  onBuy(): void {
    this.cartService.addItem(new CartItem(this.product.id, this.product.name, this.product.price, 1));
  }
}

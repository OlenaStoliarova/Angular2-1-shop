import { ProductCategory } from './product-category.model';
/**
 * Product Model
 */
export class Product {
  constructor(
    public id: number = null,
    public name: string,
    public description: string,
    public price: number = 0,
    public category: ProductCategory,
    public isAvailable: boolean = false,
    public imageUrl: string
  ) {}
}

import { CartItem } from 'src/app/cart/models/cart-item.model';

/**
 * Order Model
 */
export class Order {
  constructor(
    public id: number = null,
    public customerName: string,
    public customerPhone: string,
    public total: number,
    public items: CartItem[]
  ) {}
}

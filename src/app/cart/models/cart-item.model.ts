/**
 * CartItem Model
 */
export class CartItem {
  constructor(
    public id: number = null,
    public name: string,
    public price: number,
    public count: number
  ) {}
}
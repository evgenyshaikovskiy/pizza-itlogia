import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cartProducts = signal<IProduct[]>([]);

  public cartItems = this._cartProducts.asReadonly();

  public addToCart(product: IProduct): void {
    this._cartProducts.update((products) => [...products, product]);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  private readonly _cartService = inject(CartService);

  @Input({ required: true }) public product!: IProduct;
  @Output() public productClick = new EventEmitter<IProduct>();

  public get inCart(): boolean {
    return (
      this._cartService.cartItems().findIndex((product) => product.name === this.product.name) >= 0
    );
  }

  public addToCart(): void {
    this._cartService.addToCart(this.product);
  }

  public openProductDetails(): void {
    this.productClick.emit(this.product);
  }
}

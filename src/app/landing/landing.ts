import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { About } from '../about/about';
import { IProduct } from '../core/interfaces/product.interface';
import { Catalog } from '../catalog/catalog';
import { OrderComponent } from '../order/order';

@Component({
  selector: 'app-landing',
  imports: [About, Catalog, OrderComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  @Input() products: IProduct[] = [];
}

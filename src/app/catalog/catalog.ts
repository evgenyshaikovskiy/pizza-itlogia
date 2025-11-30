import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { IProduct } from '../core/interfaces/product.interface';
import { ProductCardComponent } from '../core/components/product-card/product-card.component';
import { DialogService } from '@ngneat/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalog {
  @Input({ required: true }) products!: IProduct[];

  private readonly _dialogService = inject(DialogService);

  public productClick(product: IProduct): void {
    console.log(product);
    this._dialogService.open(ProductDialogComponent, {
      width: 'auto',
      data: {
        product,
      },
    });
  }
}

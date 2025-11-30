import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { IProduct } from '../core/interfaces/product.interface';
import { CommonModule } from '@angular/common';

interface DialogData {
  product: IProduct;
}

@Component({
  selector: 'app-product-dialog',
  imports: [CommonModule],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialogComponent {
  private readonly ref: DialogRef<DialogData, boolean> = inject(DialogRef);

  public get product(): IProduct {
    return this.ref.data.product;
  }

  public close(): void {
    this.ref.close();
  }
}

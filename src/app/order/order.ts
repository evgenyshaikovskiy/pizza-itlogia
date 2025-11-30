import { ChangeDetectionStrategy, Component, DestroyRef, signal, inject } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NoDotsDirective } from '../core/directives/no-dots.directive';
import { CartService } from '../core/services/cart.service';
import { ToastService } from '../core/services/toast.service';
import { delay, finalize, of, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ReactiveFormsModule, NoDotsDirective],
  templateUrl: './order.html',
  styleUrl: './order.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  private readonly nbf = inject(NonNullableFormBuilder);
  private readonly toastService = inject(ToastService);
  private readonly cartService = inject(CartService);
  private readonly destroyRef = inject(DestroyRef);

  public form = this.nbf.group({
    name: this.nbf.control<string>('', [Validators.required]),
    address: this.nbf.control<string>('', [Validators.required]),
    phone: this.nbf.control<string>('', [Validators.required]),
  });

  public processing = signal(false);

  public get purchaseOrderDisabled(): boolean {
    return this.cartService.cartItems().length == 0 || this.form.invalid;
  }

  public submitOrder(): void {
    this.processing.set(true);
    of(this.cartService.cartItems())
      .pipe(
        delay(300),
        switchMap((accepted) => of(accepted.length)),
        finalize(() => this.processing.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (pizzaCount) =>
          this.toastService.show(
            `Ваши ${pizzaCount} пиццы(а) прибудут по адресу ${this.form.controls.address.value} в течении 30 минут.`,
            'Ваш заказ принят!',
            10_000,
          ),
      });
  }
}

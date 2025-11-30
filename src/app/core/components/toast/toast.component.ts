import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IToast, ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);

  @Input({ required: true }) public toast!: IToast;

  public dismiss(): void {
    this.toastService.dismiss(this.toast.id);
  }
}

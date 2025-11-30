import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-toast-container',
  imports: [CommonModule, ToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
})
export class ToastContainerComponent {
  private readonly toastService = inject(ToastService);
  public toasts$ = this.toastService.toasts$;
}

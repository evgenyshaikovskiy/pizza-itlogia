import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, timer } from 'rxjs';

export interface IToast {
  id: number;
  message: string;
  header?: string;
  timeout?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new BehaviorSubject<IToast[]>([]);
  public toasts$: Observable<IToast[]> = this.toastSubject.asObservable();
  private toastId = 0;

  constructor() {}

  public show(message: string, header?: string, timeout = 5000): void {
    const id = ++this.toastId;
    const toast: IToast = {
      id,
      message,
      header,
      timeout,
    };

    this.toastSubject.next([...this.toastSubject.getValue(), toast]);

    if (timeout > 0) {
      timer(timeout)
        .pipe(take(1))
        .subscribe(() => this.dismiss(id));
    }
  }

  public dismiss(id: number): void {
    const upd = this.toastSubject.getValue().filter((t) => t.id !== id);
    this.toastSubject.next(upd);
  }
}

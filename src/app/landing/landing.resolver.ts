import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IProduct } from '../core/interfaces/product.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductService } from '../core/services/product.service';

export const landingResolver: ResolveFn<IProduct[]> = (
  _route: ActivatedRouteSnapshot,
): Observable<IProduct[]> => {
  const service = inject(ProductService);
  return service.getCatalogProducts();
};

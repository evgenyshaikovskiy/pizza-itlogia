import { Routes } from '@angular/router';
import { LandingComponent } from './landing';
import { landingResolver } from './landing.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    resolve: {
      products: landingResolver,
    },
  },
];

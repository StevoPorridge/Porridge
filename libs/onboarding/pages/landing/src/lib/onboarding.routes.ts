import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'onboarding',
    children: [
      {
        path: 'landing',
        loadComponent: () =>
          import('./landing/landing.component').then((m) => m.LandingComponent),
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'onboarding/landing',
    pathMatch: 'full',
  },
];

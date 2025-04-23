import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@porridge/onboarding/landing').then((m) => m.routes),
  },
  {
    path: 'main',
    loadChildren: () => import('@ui/tabs').then((m) => m.routes),
  },
  {
    path: 'main/my-cats',
    loadComponent: () =>
      import('./pages/profile-page/src/lib/profile/profile.page').then(
        (c) => c.ProfilePage,
      ),
  },
];

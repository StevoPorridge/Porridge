import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'my-cats',
    loadComponent: () =>
      import('./pages/profile/profile.page').then((c) => c.ProfilePage),
  },
];

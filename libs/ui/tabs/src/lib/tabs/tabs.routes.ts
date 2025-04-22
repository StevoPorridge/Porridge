import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { AuthGuard } from '../../../../../onboarding/onboarding.guard';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@porridge/main/home').then((m) => m.HomePage),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'onboarding',
    children: [
      {
        path: 'landing',
        loadComponent: () =>
          import('./pages/landing/src/lib/landing/landing.page').then(
            (m) => m.LandingPage,
          ),
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./pages/sign-in/src/lib/sign-in/sign-in.page').then(
            (m) => m.SignInPage,
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./pages/questionnaire/src/lib/sign-up/sign-up.page').then(
            (m) => m.SignUpPage,
          ),
      },
      {
        path: 'cat-breed',
        loadComponent: () =>
          import('./pages/cat-breed/src/lib/cat-breed/cat-breed.page').then(
            (m) => m.CatBreedPage,
          ),
      },
      {
        path: 'cat-name',
        loadComponent: () =>
          import('./pages/cat-name/src/lib/cat-name/cat-name.page').then(
            (m) => m.CatNamePage,
          ),
      },
      {
        path: 'cat-age',
        loadComponent: () =>
          import('./pages/cat-age/src/lib/cat-age/cat-age.page').then(
            (m) => m.CatAgePage,
          ),
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

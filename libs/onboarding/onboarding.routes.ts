import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'onboarding',
    children: [
      {
        path: 'landing',
        loadComponent: () =>
          import('./pages/landing/src/lib/landing/landing.page').then(
            (m) => m.LandingPage
          ),
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./pages/sign-in/src/lib/sign-in/sign-in.page').then(
            (m) => m.SignInPage
          ),
      },
      {
        path: 'questionnaire',
        loadComponent: () =>
          import(
            './pages/questionnaire/src/lib/questionnaire/questionnaire.page'
          ).then((m) => m.QuestionnairePage),
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

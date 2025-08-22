import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro),
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida),
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error').then((m) => m.Error),
  },
  {
    path: 'sobre-mi',
    loadComponent: () => import('./pages/sobre-mi/sobre-mi').then((m) => m.SobreMi),
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida),
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro),
  },
  { path: 'error', loadComponent: () => import('./pages/error/error').then((m) => m.Error) },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

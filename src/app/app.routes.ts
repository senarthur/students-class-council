import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./features/overview/overview').then(m => m.Overview)
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'estudantes',
        loadComponent: () => import('./features/students/students').then(m => m.Students)
    }
];

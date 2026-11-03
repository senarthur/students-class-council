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
    },
    {
        path: 'estudantes/:id',
        loadComponent: () => import('./features/students/student-details/student-details').then(m => m.StudentDetails)
    }
];

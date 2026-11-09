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
        children: [
            {
                path: '',
                loadComponent: () => import('./features/students/students').then(m => m.Students)
            },
            {
                path: 'adicionar',
                loadComponent: () => import('./features/students/student-create-edit/student-create-edit').then(m => m.StudentCreateEdit)
            },
            {
                path: ':id/editar',
                loadComponent: () => import('./features/students/student-create-edit/student-create-edit').then(m => m.StudentCreateEdit)
            },
            {
                path: ':id/detalhes',
                loadComponent: () => import('./features/students/student-details/student-details').then(m => m.StudentDetails)
            },
        ]
    },
];

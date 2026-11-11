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
    {
        path: 'conselho-classe',
        children: [
            {
                path: '',
                loadComponent: () => import('./features/class-council/class-council').then(m => m.ClassCouncil)
            },
            {
                path: 'avaliar/:id',
                loadComponent: () => import('./features/class-council/class-council-evaluation/class-council-evaluation').then(m => m.ClassCouncilEvaluation)
            }
        ]
    },
];

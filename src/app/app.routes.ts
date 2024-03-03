import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
        loadComponent: () => import('./app-shell/app-shell.component').then(mod => mod.AppShellComponent)
    }
];

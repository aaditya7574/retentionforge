import { Routes } from '@angular/router';
import { PublicLayouts } from './layouts/public-layouts/public-layouts';

export const routes: Routes = [
    // PUBLIC LAYOUT
    {
        path: '',
        component: PublicLayouts,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./layouts/public-layouts/public-layouts-routing-module').then(m => m.PUBLIC_ROUTES)
            }
        ]
    },
];

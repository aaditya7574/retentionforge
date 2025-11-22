import { Routes } from "@angular/router";
import { ServicesOverview } from "./services-overview";

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'service-listing',
        pathMatch: 'full'
    },
    {
        path: 'service-listing',
        component: ServicesOverview,
    },
]
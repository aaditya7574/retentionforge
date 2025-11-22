import { Routes } from "@angular/router";
import { Welcome } from "../../views/public/welcome/welcome";
import { ProductDetailsPage } from "../../views/public/product-details-page/product-details-page";
import { ProductListingPage } from "../../views/public/product-listing-page/product-listing-page";
import { AboutPage } from "../../views/public/about-page/about-page";
import { ServicesOverview } from "../../views/public/services-overview/services-overview";
import { ChurnAnalysisStudies } from "../../views/public/services-overview/churn-analysis-studies/churn-analysis-studies";
import { ContactUs } from "../../views/public/contact-us/contact-us";

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: Welcome,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'services',
    component: ServicesOverview,
  },
  {
    path: 'services/churn-analysis',
    component: ChurnAnalysisStudies,
  },
  {
    path: 'contact',
    component: ContactUs,
  },

];

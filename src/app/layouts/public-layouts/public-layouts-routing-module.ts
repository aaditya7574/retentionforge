import { Routes } from "@angular/router";
import { Welcome } from "../../views/public/welcome/welcome";
import { ProductDetailsPage } from "../../views/public/product-details-page/product-details-page";
import { ProductListingPage } from "../../views/public/product-listing-page/product-listing-page";
import { AboutPage } from "../../views/public/about-page/about-page";
import { ServicesOverview } from "../../views/public/services-overview/services-overview";
import { ChurnAnalysisStudies } from "../../views/public/services-overview/churn-analysis-studies/churn-analysis-studies";
import { ContactUs } from "../../views/public/contact-us/contact-us";
import { ServiceDetails } from "../../views/public/services-overview/service-details/service-details";
import { CustomeSuccessDepartment } from "../../views/public/services-overview/custome-success-department/custome-success-department";
import { RevenueRetentionStrategyOptimization } from "../../views/public/services-overview/revenue-retention-strategy-optimization/revenue-retention-strategy-optimization";
import { ProfessionalServicesRevenueOptimization } from "../../views/public/services-overview/professional-services-revenue-optimization/professional-services-revenue-optimization";
import { CustomerHealthScoringSystemDevelopment } from "../../views/public/services-overview/customer-health-scoring-system-development/customer-health-scoring-system-development";
import { AccountManagementExpansionStrategy } from "../../views/public/services-overview/account-management-expansion-strategy/account-management-expansion-strategy";
import { OrganizationalDesignForPostSaleTeams } from "../../views/public/services-overview/organizational-design-for-post-sale-teams/organizational-design-for-post-sale-teams";
import { OnboardingImplementationOptimization } from "../../views/public/services-overview/onboarding-implementation-optimization/onboarding-implementation-optimization";
import { ExecutiveCoachingForCustomerSuccessLeaders } from "../../views/public/services-overview/executive-coaching-for-customer-success-leaders/executive-coaching-for-customer-success-leaders";
import { KPIFrameworkMetricsDesign } from "../../views/public/services-overview/kpi-framework-metrics-design/kpi-framework-metrics-design";
import { Resources } from "../../views/resources/resources";

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
    component: ServiceDetails,
  },
  {
    path: 'services/churn-analysis',
    component: ChurnAnalysisStudies,
  },
  {
    path: 'services/customer-success-department-design-build',
    component: CustomeSuccessDepartment,
  },
  {
    path: 'services/revenue-retention-strategy-optimization',
    component: RevenueRetentionStrategyOptimization,
  },
  {
    path: 'services/professional-services-revenue-optimization',
    component: ProfessionalServicesRevenueOptimization,
  },
  {
    path: 'services/customer-health-scoring-system-development',
    component: CustomerHealthScoringSystemDevelopment,
  },
  {
    path: 'services/account-management-expansion-strategy',
    component: AccountManagementExpansionStrategy,
  },
  {
    path: 'services/organizational-design-for-post-sale-teams',
    component: OrganizationalDesignForPostSaleTeams,
  },
  {
    path: 'services/onboarding-implementation-optimization',
    component: OnboardingImplementationOptimization,
  },
  {
    path: 'services/executive-coaching-for-customer-success-leaders',
    component: ExecutiveCoachingForCustomerSuccessLeaders,
  },
  {
    path: 'services/KPI-framework-metrics-design',
    component: KPIFrameworkMetricsDesign,
  },
  {
    path: 'resources',
    component: Resources,
  },
  {
    path: 'contact',
    component: ContactUs,
  },

];

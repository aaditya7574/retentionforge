import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-overview',
  imports: [CommonModule, RouterModule],
  templateUrl: './services-overview.html',
  styleUrl: './services-overview.scss',
})
export class ServicesOverview {
  services: any[] = [
    { id: '01', name: 'Churn Analysis & Customer Retention Studies', description: 'Systematic customer interviews and analysis to uncover true churn drivers and develop prevention strategies.', slug: 'churn-analysis' },
    { id: '02', name: 'Customer Success Department Design & Build', description: 'Complete organizational blueprint for building scalable, revenue-generating Customer Success teams from scratch.', slug: 'customer-success-department-design-build' },
    { id: '03', name: 'Revenue Retention Strategy Optimization', description: 'Data-driven strategies to maximize GRR and NRR through proactive engagement and systematic expansion frameworks.', slug: 'revenue-retention-strategy-optimization' },
    { id: '04', name: 'Professional Services Revenue Optimization', description: 'Transform PS from cost center to profit engine through delivery optimization and pricing model refinement.', slug: 'professional-services-revenue-optimization' },
    { id: '05', name: 'Customer Health Scoring System Development', description: 'Multi-dimensional health scoring frameworks that provide early warning systems and proactive engagement triggers.', slug: 'customer-health-scoring-system-development' },
    { id: '06', name: 'Account Management & Expansion Strategy', description: 'Systematic frameworks for cross-sell, upsell, and multi-year renewals that drive predictable expansion revenue.', slug: 'account-management-expansion-strategy' },
    { id: '07', name: 'Organizational Design for Post-Sale Teams', description: 'Optimal organizational structures for CS, PS, Support, and AM teams ensuring clarity, efficiency, and scalability.', slug: 'organizational-design-for-post-sale-teams' },
    { id: '08', name: 'Onboarding & Implementation Optimization', description: 'Standardized onboarding processes that accelerate time-to-value and establish foundations for retention.', slug: 'onboarding-implementation-optimization' },
    { id: '09', name: 'Executive Coaching for Customer Success Leaders', description: 'One-on-one advisory for VP/Director-level CS leaders navigating growth challenges and organizational transformation.', slug: 'executive-coaching-for-customer-success-leaders' },
    { id: '10', name: 'KPI Framework & Metrics Design', description: 'Comprehensive measurement frameworks with leading and lagging indicators aligned to business outcomes.', slug: 'KPI-framework-metrics-design' },
  ];
}

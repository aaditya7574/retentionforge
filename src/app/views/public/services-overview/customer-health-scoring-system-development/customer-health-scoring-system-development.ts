import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-health-scoring-system-development',
  imports: [RouterLink],
  templateUrl: './customer-health-scoring-system-development.html',
  styleUrl: './customer-health-scoring-system-development.scss',
})
export class CustomerHealthScoringSystemDevelopment implements OnInit {
  service = {
    name: 'Customer Health Scoring System Development',
    slug: 'customer-health-scoring',
    shortDescription: 'Build a predictive, multi-dimensional customer health scoring framework that drives proactive Customer Success.',

    overview: `Customer health scoring is both art and science—requiring the right balance of quantitative usage data, qualitative signals, and business context to accurately predict customer risk and expansion opportunities. 
  Our Customer Health Scoring System Development service creates comprehensive, multi-dimensional scoring frameworks that provide actionable early warning systems and proactive engagement triggers.`,

    deliverables: [
      'Data Source Inventory – Full mapping of available data sources including product usage, support tickets, NPS, billing history, engagement metrics, and qualitative signals',
      'Attribute Selection & Weighting – Selection of 8–15 high-impact attributes with statistically determined weighting based on correlation to renewal and expansion outcomes',
      'Multi-Dimensional Scoring Model – Combined scoring across adoption, engagement depth, value realization, relationship health, and sentiment indicators',
      'Segment-Specific Scoring – Customized scoring models for enterprise, SMB, vertical-specific, and product-tier-specific customer segments',
      'Risk Thresholds & Alert Triggers – Automated risk-level assignment with thresholds for critical, high, medium, and low health',
      'Trending & Predictive Analytics – Momentum tracking and predictive models identifying 30/60/90-day risk trends',
      'Playbook Integration Framework – Automated assignment of CSM playbooks based on health score and risk level',
      'Score Validation & Calibration – Statistical validation to ensure the model reliably predicts renewals and expansions with ongoing calibration recommendations',
      'Documentation & Training Materials – Detailed scoring logic, methodology documentation, and CSM training guides',
    ],

    impact: [
      { title: 'Early Risk Detection', description: 'Identify at-risk customers 60–90 days before renewal with leading indicators instead of lagging metrics.' },
      { title: 'Resource Optimization', description: 'Prioritize CSM time based on data-driven needs rather than intuition or equal distribution.' },
      { title: 'Consistent Customer Experience', description: 'Ensure standardized, objective interventions regardless of which CSM manages the account.' },
      { title: 'Expansion Identification', description: 'Surface upsell and cross-sell opportunities based on strong engagement and product usage patterns.' },
      { title: 'Executive Visibility', description: 'Provide leadership with portfolio-level health insights for strategic and board-level decisions.' }
    ],

    engagement: {
      duration: '6–8 weeks',
      format: 'Remote + optional on-site sessions',
      involvement: 'Data access · Stakeholder workshops · Validation sessions · Implementation planning'
    },
    
    idealFor: [
      'SaaS companies with 100+ customers needing systematic health tracking',
      'Organizations relying on simplistic or inaccurate health scoring models',
      'CS teams managing large portfolios needing structured prioritization',
      'Companies implementing or optimizing Customer Success Platforms'
    ],


    whyThisMattersExtended: `Customer health scoring transforms Customer Success from reactive firefighting into proactive portfolio management. 
Without robust health scoring, teams rely on intuition—leading to missed early signals and last-minute renewal challenges.

Effective scoring systems identify risk early, highlight expansion-ready accounts, and provide objective prioritization for CSMs. 
Most companies struggle because they use too many attributes, weight them equally, or fail to validate their predictive accuracy.

Our approach is both scientifically rigorous and operationally practical—ensuring the model is both accurate and easy for teams to adopt across the organization.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

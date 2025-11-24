import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-management-expansion-strategy',
  imports: [RouterLink],
  templateUrl: './account-management-expansion-strategy.html',
  styleUrl: './account-management-expansion-strategy.scss',
})
export class AccountManagementExpansionStrategy implements OnInit {
  service = {
    name: 'Account Management & Expansion Strategy',
    slug: 'account-management-expansion',
    shortDescription: 'Build a dedicated, systematic expansion engine focused on cross-sell, upsell, and multi-year renewals.',

    overview: `Most SaaS companies leave significant expansion revenue untapped because Account Management functions are poorly structured, under-resourced, or misaligned with Customer Success.
  Our Account Management & Expansion Strategy service builds or transforms AM teams to focus on systematic cross-sell, upsell, and multi-year renewals—creating repeatable frameworks for identifying, qualifying, and closing expansion opportunities.`,

    deliverables: [
      'Customer Segmentation for Expansion – Framework identifying customers with highest expansion potential based on usage, maturity, size, and organizational characteristics',
      'Expansion Opportunity Identification – Systematic process for surfacing cross-sell and upsell opportunities with triggers, qualification criteria, and handoff protocols',
      'Account Management Organizational Model – Role definitions, portfolio sizes, and structural alignment across CS, Sales, or dedicated AM teams',
      'Expansion Playbook Library – Stage-based plays for module add-ons, seat expansion, product upgrades, and cross-sell opportunities with objection handling',
      'Qualification & Prioritization Framework – Scoring model ranking opportunities by deal size, probability, urgency, and timeline',
      'Compensation & Incentive Design – Commissions and bonus structures aligned with expansion goals without harming customer relationships',
      'Multi-Year Contract Strategy – Pricing strategies, commitment structures, and negotiation frameworks for multi-year deals',
      'Sales-CS Handoff Protocols – Clear qualification gates and communication standards defining transitions between CS, AM, and Sales',
      'Technology Stack Recommendations – Tools for managing expansion pipelines, communication tracking, and automated opportunity discovery',
      '90-Day Launch Plan – Implementation roadmap covering hiring (if needed), training, pilot accounts, and success measures'
    ],

    impact: [
      { title: 'NRR Growth Engine', description: 'Systematic expansion frameworks increase NRR from 100–105% to 115–130%—creating growth from existing customers.' },
      { title: 'Higher Revenue Efficiency', description: 'Expansion deals close 3–5x faster with 60–70% win rates compared to new-logo sales.' },
      { title: 'Improved LTV Economics', description: 'Every expansion dollar boosts lifetime value, improving CAC payback and unit economics.' },
      { title: 'Stronger Customer Stickiness', description: 'Customers adopting multiple modules/products have 50–70% lower churn rates.' },
      { title: 'Predictable Pipeline Growth', description: 'Expansion pipeline grows with your customer base, creating stability against market fluctuations.' }
    ],

    engagement: {
      duration: '6–8 weeks',
      format: 'Remote + optional on-site workshops',
      involvement: 'Stakeholder interviews · Data analysis · Design workshops · Pilot planning'
    },

    idealFor: [
      'SaaS companies with NRR below 110% needing systematic expansion strategies',
      'Multi-product SaaS organizations not maximizing cross-sell opportunities',
      'Companies where expansion opportunities fall between CS and Sales',
      'Executive teams wanting to reduce dependence on new customer acquisition for growth'
    ],

    whyThisMattersExtended: `Expansion revenue is the most efficient revenue in SaaS—featuring shorter sales cycles, higher win rates, and lower acquisition costs. 
Yet most companies treat expansion reactively or assign it to teams without capacity or proper incentives.

Systematic expansion improves NRR, increases LTV, strengthens customer stickiness, and creates predictable, compounding revenue growth. 
Our approach creates role clarity, structured playbooks, prioritization models, and incentive systems that turn expansion into a repeatable revenue engine—rather than accidental wins.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

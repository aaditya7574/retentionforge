import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kpi-framework-metrics-design',
  imports: [RouterLink],
  templateUrl: './kpi-framework-metrics-design.html',
  styleUrl: './kpi-framework-metrics-design.scss',
})
export class KPIFrameworkMetricsDesign implements OnInit {
  service = {
    name: 'KPI Framework & Metrics Design',
    slug: 'kpi-framework-metrics-design',
    shortDescription: 'Design a unified, strategic KPI system that aligns Customer Success, Support, and Professional Services with company-wide goals using leading and lagging indicators.',

    overview: `Most post-sale teams track too many metrics—or worse, the wrong ones—leading to noise, confusion, and misalignment. 
  Our KPI Framework & Metrics Design service establishes a clear, strategic measurement system that aligns team behavior with business outcomes, enhances visibility for executives, and creates actionable insights across Customer Success, Support, and Professional Services.`,

    deliverables: [
      'Strategic Metrics Hierarchy – Tiered system connecting company-level North Star metrics to team KPIs and individual contributor metrics with clear line-of-sight',
      'Leading vs. Lagging Indicators – Balanced set of predictive and outcome metrics enabling proactive management of risk and opportunity',
      'Customer Success Metrics Framework – GRR, NRR, churn, expansion, efficiency metrics, adoption metrics, NPS, health score architecture, and time-to-value indicators',
      'Professional Services Metrics Framework – PS revenue, gross margin, utilization, project margin, on-time delivery, scope variance, CSAT, and adoption-related metrics',
      'Technical Support Metrics Framework – Ticket volume, FRT, TTR, MTTR, CSAT, one-touch resolution, backlog, tickets per agent, and cost per ticket models',
      'Segment-Specific Metrics – Tailored metrics for enterprise, mid-market, SMB, high-touch, low-touch, and tech-touch segments',
      'Metrics Definitions & Calculation Methods – Standardized formulas, data source mappings, definitions, and logic documentation',
      'Target Setting Framework – Methodology for setting realistic, strategy-aligned KPI targets using historical data and benchmarks',
      'Reporting Cadence & Governance – Defined frequencies for operational, managerial, executive, and board reporting',
      'Executive Dashboard Design – Mockups and layouts for leadership reporting with trends, forecasts, and segmentation',
      'Operational Dashboard Design – Team-level dashboards for managers and ICs focused on actionable day-to-day insights',
      'Incentive Alignment Review – Evaluation of compensation plans to ensure metrics reinforce the correct behaviors'
    ],

    impact: [
      { title: 'Stronger Strategic Alignment', description: 'Unified KPIs ensure every team and individual is aligned with company-wide goals.' },
      { title: 'Proactive Risk Management', description: 'Leading indicators reveal churn or adoption risks earlier, enabling faster intervention.' },
      { title: 'Higher Executive Credibility', description: 'Clear, accurate, and meaningful metrics improve leadership and board confidence in CS, PS, and Support functions.' },
      { title: 'Performance Accountability', description: 'Individual and team metrics create clarity, fairness, and data-driven performance conversations.' },
      { title: 'Better Resource Allocation', description: 'Metrics reveal where investments will drive maximum impact and highlight underperforming areas.' }
    ],

    engagement: {
      duration: '4–6 weeks',
      format: 'Remote collaboration · Workshops · Dashboard prototyping',
      involvement: 'Stakeholder interviews · Strategy alignment · Metric validation sessions'
    },

    idealFor: [
      'SaaS companies with inconsistent or unclear metrics across post-sale functions',
      'Organizations preparing for board reporting or fundraising',
      'CS, PS, and Support leaders needing data-driven management frameworks',
      'Companies implementing Customer Success Platforms and defining what to measure'
    ],

    whyThisMattersExtended: `Metrics shape behavior, priorities, and decisions—yet most teams track vanity metrics or an overwhelming volume of data that provides little clarity. 
A strong KPI system focuses on the vital few indicators that truly matter, enabling earlier risk detection, clearer alignment, and stronger executive storytelling.

Our framework ensures CS, PS, and Support leaders measure what drives retention, expansion, efficiency, and customer outcomes—creating a scalable, repeatable measurement system that grows with the business.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

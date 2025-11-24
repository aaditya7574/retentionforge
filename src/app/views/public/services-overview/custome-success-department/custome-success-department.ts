import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custome-success-department',
  imports: [RouterLink],
  templateUrl: './custome-success-department.html',
  styleUrl: './custome-success-department.scss',
})
export class CustomeSuccessDepartment implements OnInit {
  service: any = {
    name: 'Customer Success Department — Design & Build',
    slug: 'cs-department-design-build',

    shortDescription: 'Build a scalable, revenue-driving Customer Success function with complete organizational design, staffing models, KPIs, and implementation roadmap.',

    overview: `Building a Customer Success function from scratch — or transforming an underperforming one — requires far more than hiring CSMs and hoping for the best. Our Customer Success Department Design & Build service establishes the complete organizational foundation needed for CS teams to become true revenue-generating engines rather than reactive support functions.`,

    deliverables: [
      'Organizational Structure Design – Detailed org chart defining roles, reporting relationships, segmentation (high-touch, low-touch, tech-touch), and managerial span of control',
      'Customer Segmentation Model – Framework for dividing customers by tiers, verticals, or journey stage, with portfolio criteria and recommended book sizes',
      'Role Definitions & Job Descriptions – Responsibilities, required skills, success metrics, and career paths across all CS roles',
      'Hiring Plan & Timeline – Phased hiring roadmap aligned with revenue projections and customer growth',
      'Compensation Framework – Salary ranges, bonus/commission models, and retention/expansion incentive alignment',
      'Technology Stack Recommendations – CSP platforms, analytics tools, automation tools, documentation systems with priority sequencing',
      'Metrics & KPI Framework – GRR, NRR, time-to-value, product adoption metrics, health scores, expansion KPIs, and team-level dashboards',
      'Budgeting & Financial Modeling – Full first-year budget, headcount plan, tooling costs, ROI projections, and profitability pathways',
      '90-Day Implementation Roadmap – Step-by-step execution plan with milestones, timelines, and ownership'
    ],

    whyThisMattersIntro: `Customer Success done wrong is expensive overhead. Customer Success done right is a profit center that pays for itself through improved retention and expansion revenue.`,

    whyThisMattersPoints: [
      'Scalability — Properly structured CS teams scale efficiently without reorganization chaos',
      'Predictable Economics — Clear segmentation models create reliable capacity planning',
      'Revenue Impact — Well-designed CS functions typically achieve GRR of 85–95% and NRR of 105–130%',
      'Talent Retention — Clear roles and career ladders reduce turnover and protect institutional knowledge',
      'Cross-Functional Alignment — Proper CS design eliminates handoff gaps with Sales, Support, and Product',
      'Most companies build CS reactively, leading to dysfunction, unclear ownership, inefficient processes, and poor retention.',
      'Our approach builds CS intentionally from day one so structure aligns with business strategy and customer needs.'
    ],
    
    engagement: {
      duration: '6–8 weeks',
      format: 'Remote + optional on-site workshops',
      involvement: 'Stakeholder interviews (CEO, CRO, CFO, VP of Sales), customer/revenue data sharing, design review sessions, implementation planning',
      timeline: `Week 1–2: Discovery & current-state analysis  
Week 3–4: Organizational design & modeling  
Week 5–6: Documentation development  
Week 7–8: Presentation & implementation planning`,
      deliverables: 'Comprehensive 40–60 page design document, implementation slide deck, and financial model spreadsheet'
    },

    idealFor: [
      'Series A/B SaaS companies ($5M–$50M ARR) building their first CS function',
      'Companies with underperforming CS teams needing restructuring',
      'Organizations preparing for hypergrowth requiring scalable CS foundations',
      'Companies struggling with unclear CS ownership, inefficient processes, or weak retention metrics'
    ]
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

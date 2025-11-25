import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-churn-analysis-studies',
  imports: [RouterLink],
  templateUrl: './churn-analysis-studies.html',
  styleUrl: './churn-analysis-studies.scss',
})
export class ChurnAnalysisStudies implements OnInit {
  service = {
    name: 'Churn Analysis & Customer Retention Studies',
    slug: 'churn-analysis',
    shortDescription: 'Uncover the real reasons customers leave — and stop it before it happens.',

    overview: `Understanding why customers leave is one of the most critical insights any SaaS company can gain. 
    Our Churn Analysis & Customer Retention Studies service conducts systematic, in-depth interviews with churned customers to uncover the real reasons behind attrition—going beyond surface-level data to reveal patterns, pain points, and preventable causes that traditional analytics miss.`,

    deliverables: [
      'Direct Customer Interviews – 10–20 structured interviews with recently churned customers using proven frameworks',
      'Pattern Analysis – Identification of recurring themes, pain points, and systemic issues across segments',
      'Quantified Impact Assessment – Financial impact ranking of each churn driver',
      'Segmentation Insights – Churn patterns by customer type, vertical, tier, contract size, and more',
      'Competitive Intelligence – Where customers went and why they perceived competitors as better',
      'Root Cause Analysis – Product gaps, service failures, pricing, expectations, or organizational issues',
      'Actionable Recommendations – Prioritized, implementable strategies for the next 6–12 months',
      'Executive Presentation – Board-ready slide deck (15–20 slides) summarizing findings and action plan'
    ],

    impact: [
      { title: '2–5 Point GRR Improvement', description: 'Typical increase in Gross Revenue Retention within 12 months of implementing recommendations' },
      { title: 'Direct Bottom-Line Impact', description: 'Each 1% reduction in churn = retained revenue and improved unit economics' },
      { title: 'Stronger Investor Confidence', description: 'Clear churn understanding and mitigation plan significantly improves fundraising optics' },
      { title: 'Better Product & Segmentation Decisions', description: 'Customer voice directly informs roadmap and ideal customer profile refinement' }
    ],

    engagement: {
      duration: '4–6 weeks',
      format: 'Remote + optional on-site workshops',
      involvement: 'Provide churned customer list · Kickoff alignment · Review draft findings · Executive presentation'
    },

    idealFor: [
      'SaaS companies with annual churn rates above 10% seeking root causes',
      'Companies experiencing sudden, unexplained increases in churn',
      'Organizations preparing for fundraising or IPO who need to show churn mitigation',
      'Product and CS teams needing unfiltered customer voice to prioritize roadmap and service improvements'
    ],

    whyThisMattersExtended: `Churn directly impacts your company's growth trajectory and valuation. A SaaS company with 5% annual churn grows 40% faster than one with 10% churn — assuming identical new customer acquisition rates.

Most companies struggle with churn analysis because they lack the time, objectivity, and expertise to conduct thorough customer interviews. Customers often won’t share honest feedback with their CSM or Account Manager, but they’ll open up to a neutral third party. Our systematic approach ensures you get the truth — not the polite version.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

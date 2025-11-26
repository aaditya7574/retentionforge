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

    overview: `Most health scores are too complicated to be useful—too many factors, unclear signals,
and nobody trusts the results. We help you identify the core inputs that really matter for
predicting customer health, so your team can act with confidence.`,

    deliverables: [
      'Core Health Score Inputs – The exact usage, engagement, and risk signals needed to define a clear and actionable health score.',
      'Segment Recommendations – Simple or segment-specific input lists tailored to your customer base and business model.',
      'Score Structure Guidance – High-level recommendations on score ranges, color coding, and structure (not a mathematical model).',
      'Implementation Checklist – A step-by-step summary enabling your team to configure the health score in your CSP or tool of choice.',
      '30-Day Support – Follow-up Q&A support for 30 days as your team builds and finalizes your own scoring model.',
    ],

    impact: [
      { title: 'Clarity Over Complexity', description: 'Too many signals create noise—fewer, more meaningful inputs result in health scores your team will actually use.' },
      { title: 'Faster Results', description: 'Skip months of analysis and get a practical, ready-to-implement input list your team can deploy in days.' },
      { title: 'Higher Impact', description: 'CSMs and leaders get early warnings on churn and growth—actionable signals instead of data that nobody acts on.' },
    ],


    engagement: {
      duration: 'A focused project completed in less than 3 weeks.',
      discovery: 'Kickoff call and review of your current approach.',
      inputDesign: 'Stakeholder interviews and draft input list.',
      alignment: 'Collaborative working session to finalize.',
      blueprintDelivery: 'Easy-to-use document and quick support as you implement.',
    },

    idealFor: [
      'SaaS companies that need a simple, trusted way to identify at-risk or high-potential customers.',
      'Teams frustrated by noisy or overcomplicated health scores.',
      'Anyone setting up a health score for the first time or looking to clean up an old one.',
      'Works as a standalone project or as an add-on to other RetentionForge services.',
    ],



//     whyThisMattersExtended: `Customer health scoring transforms Customer Success from reactive firefighting into proactive portfolio management. 
// Without robust health scoring, teams rely on intuition—leading to missed early signals and last-minute renewal challenges.

// Effective scoring systems identify risk early, highlight expansion-ready accounts, and provide objective prioritization for CSMs. 
// Most companies struggle because they use too many attributes, weight them equally, or fail to validate their predictive accuracy.

// Our approach is both scientifically rigorous and operationally practical—ensuring the model is both accurate and easy for teams to adopt across the organization.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

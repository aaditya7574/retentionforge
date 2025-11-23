import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding-implementation-optimization',
  imports: [RouterLink],
  templateUrl: './onboarding-implementation-optimization.html',
  styleUrl: './onboarding-implementation-optimization.scss',
})
export class OnboardingImplementationOptimization implements OnInit {
  service = {
    name: 'Onboarding & Implementation Optimization',
    slug: 'onboarding-implementation-optimization',
    shortDescription: 'Accelerate time-to-value, standardize onboarding, and create scalable implementation processes that drive retention and expansion.',

    overview: `Customer onboarding is the most critical phase of the SaaS lifecycle—setting the trajectory for long-term retention, adoption, and expansion.
  Our Onboarding & Implementation Optimization service redesigns and streamlines onboarding processes to accelerate time-to-value, increase adoption, improve consistency, and establish strong foundations for customer success.`,

    deliverables: [
      'Current State Assessment – Evaluation of existing onboarding processes including time-to-value, completion rates, CSAT, and resource requirements',
      'Customer Journey Mapping – End-to-end mapping from contract signature to first value with friction, bottleneck, and drop-off identification',
      'Segmented Onboarding Models – Tailored onboarding approaches for enterprise, mid-market, SMB, and different complexity levels',
      'Time-to-Value Optimization – Strategies to reduce onboarding duration by 30–50% through parallel workflows and friction removal',
      'Standardized Onboarding Methodology – Repeatable phases, milestones, deliverables, and success criteria across all customer segments',
      'Customer Onboarding Playbooks – Tiered playbooks with timelines, task lists, communication templates, and escalation paths',
      'Customer-Facing Assets – Welcome kits, setup guides, training materials, video tutorials, and knowledge base content for self-service enablement',
      'Resource Optimization Framework – Automation, templatization, and enablement strategies reducing delivery hours while protecting outcomes',
      'Success Criteria & Metrics – Clear definition of “onboarding complete” with adoption milestones, usage thresholds, and value indicators',
      'Onboarding Technology Stack – Recommended tools for project management, communication, training, and progress tracking',
      'Handoff Protocol – Defined transition process from onboarding to Customer Success with warm handoffs and documentation standards',
      '90-Day Implementation Plan – A full rollout plan including pilots, team training, launch sequencing, and success metrics'
    ],

    impact: [
      { title: 'Higher Retention', description: 'Customers with strong onboarding achieve 90–95% first-year retention compared to 60–70% for weak onboarding.' },
      { title: 'Faster Time-to-Value', description: 'Reducing onboarding duration by 30–50% accelerates value realization and revenue recognition.' },
      { title: 'Increased Expansion Potential', description: 'Early positive momentum increases expansion likelihood by 40–60% within the first year.' },
      { title: 'Greater Operational Efficiency', description: 'Standardized onboarding reduces delivery hours per customer by 30–50% and improves PS margins.' },
      { title: 'Improved Customer Satisfaction', description: 'Consistent early experiences create trust and set the tone for long-term customer relationships.' }
    ],

    engagement: {
      duration: '6–8 weeks',
      format: 'Remote + optional on-site workshops',
      involvement: 'Stakeholder interviews · Journey mapping · Process design · Playbook creation · Pilot planning'
    },

    idealFor: [
      'SaaS companies with onboarding durations exceeding 60 days',
      'Organizations with inconsistent onboarding experiences across specialists',
      'Companies experiencing early-lifecycle churn tied to onboarding gaps',
      'Professional Services teams struggling with workload scalability'
    ],

    whyThisMattersExtended: `Onboarding is the single strongest predictor of long-term customer health. 
Customers who fail to see value in the first 90 days churn at 3–4x higher rates. Yet most companies treat onboarding as custom consulting—leading to inconsistent delivery, inefficiency, and unpredictable outcomes.

Our approach treats onboarding as a product: standardized, measurable, and continuously optimized. We create scalable processes, playbooks, tools, and customer-facing assets that reduce time-to-value, improve experience consistency, and establish strong foundations for retention and expansion.`
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

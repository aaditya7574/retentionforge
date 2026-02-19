import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fractional-leadership',
  imports: [CommonModule, RouterLink],
  templateUrl: './fractional-leadership.html',
  styleUrl: './fractional-leadership.scss',
})
export class FractionalLeadership {
  service = {
    name: 'Fractional Leadership Services',

    shortDescription:
      'Embedded executive leadership for post-sale organizations — delivering accountability, strategy, and execution without the cost or risk of a full-time hire.',

    supportingDescription:
      'Short-term, high-impact leadership to stabilize, redesign, and scale Customer Success, Account Management, Support, and Professional Services.',

    overview: `
Post-sale organizations eventually outgrow founder-led oversight and informal structures. You start feeling it in missed renewals, stalled expansion, and rising escalations – long before you can justify or find the right full-time executive.

Fractional Leadership Services gives you an experienced post-sale executive who steps in part‑time to own strategy, execution, and accountability while you hire or decide on a permanent structure. Think of it as a rental CCO or VP of Customer Success who has taken SaaS companies from 5M to 150M ARR and knows what “good” looks like at each stage.`,

    /* ----------------------------------
     * WHAT THIS SERVICE DELIVERS
     * ---------------------------------- */
    deliverables: [
      'Executive ownership of post-sale strategy across Customer Success, Account Management, Support, and Professional Services.',
      'Clear retention and expansion plan with targets for GRR, NRR, and key leading indicators.',
      'Organizational design for post-sale teams – roles, reporting lines, handoffs, and accountability.',
      'Operating cadence – QBR/EBR structure, forecast reviews, pipeline and risk reviews, and escalation frameworks.',
      'Metrics and reporting – dashboards and scorecards that let leadership and the board see what is happening in the base.',
      'Talent assessment, coaching, and hiring support for existing and future post-sale leaders.',
      'Cross-functional alignment with Sales, Product, and Finance on coverage models, pricing, and customer experience.',
      'Transition plan to an internal leader, so you keep the system even after the fractional engagement ends.',
    ],

    /* ----------------------------------
     * WHY THIS MATTERS
     * ---------------------------------- */
    whyThisMattersExtended: `
Most SaaS companies wait too long to professionalize post-sale leadership. By the time the first VP of CS or CCO is hired, churn patterns are entrenched, teams are burned out, and customers feel the chaos. Fractional leadership closes that gap without forcing a rushed executive hire.
    `,

    impact: [
      {
        title: 'Stronger Retention and Expansion',
        description:
          'Board-ready plan to move from reactive churn-fighting to a clear path toward best-in-class NRR.'
      },
      {
        title: 'Faster Organizational Clarity',
        description:
          'Defined roles, handoffs, and coverage so your team knows who owns what – and customers stop falling through the cracks.'
      },
      {
        title: 'Lower Leadership Risk',
        description:
          'Time and space to hire the right full-time leader, with the strategy, org design, and metrics already in place.'
      },
      {
        title: 'Better Board and Investor Confidence',
        description:
          'A credible operator leading the function, with a clear narrative and numbers the board can trust.'
      }
    ],

    /* ----------------------------------
     * TYPICAL ENGAGEMENT
     * ---------------------------------- */
    engagement: {
      duration: '6–12 months (minimum 6 months)',
      format: 'Fractional executive engagement (1–3 days per week)',
      involvement:
        'Active executive collaboration with leadership team and hands-on execution ownership'
    },

    /* ----------------------------------
     * IDEAL FOR
     * ---------------------------------- */
    idealFor: [
      {
        title: 'Growing SaaS companies between 10M and 150M ARR',
        description:
          'Feeling post-sale growing pains but not ready to add another full-time executive.'
      },
      {
        title: 'Founders currently “playing CCO”',
        description:
          'Needing to hand off Customer Success and post-sale leadership to someone who has done it before.'
      },
      {
        title: 'Organizations with an unexpected VP/Head departure',
        description:
          'At risk of losing momentum and needing a bridge while the search is underway.'
      },
      {
        title: 'Companies undergoing major change',
        description:
          'New funding, product expansion, or GTM shift requiring experienced post-sale leadership.'
      }
    ],


    /* ----------------------------------
     * FUNCTION-SPECIFIC FOCUS
     * ---------------------------------- */
    functionSpecificFocus: {
      'Fractional VP of Customer Success': [
        'Customer lifecycle architecture and segmentation',
        'Health scoring and proactive risk management',
        'Expansion revenue frameworks and playbooks',
        'Renewal process design and pre-renewal engagement',
        'CSM productivity and performance management',
        'Sales, Product, and Support alignment'
      ],

      'Fractional VP of Professional Services': [
        'Service catalog redesign and pricing optimization',
        'Delivery methodology standardization',
        'Project margin improvement and accountability',
        'Resource utilization strategy',
        'Partner delivery ecosystem development',
        'Implementation-to-CS handoff protocols'
      ],

      'Fractional VP of Support / Technical Services': [
        'Support strategy and service-level definitions',
        'Ticket triage, escalation, and resolution workflows',
        'First-response and resolution-time ownership',
        'Knowledge base and self-service strategy',
        'Support staffing and utilization planning',
        'CSAT and customer effort measurement'
      ],

      'Fractional VP of Account Management': [
        'Account segmentation and coverage models',
        'Expansion opportunity identification frameworks',
        'Upsell, cross-sell, and land-and-expand playbooks',
        'Sales–CS handoff protocols',
        'Multi-year contract and pricing strategy',
        'Expansion pipeline forecasting and compensation design'
      ],

      'Fractional Chief Customer Officer': [
        'Unified post-sale organization across CS, PS, Support, and AM',
        'End-to-end customer lifecycle ownership',
        'Cross-functional decision-making authority',
        'Enterprise customer success strategy',
        'Customer data integration and analytics',
        'Executive and board communication on customer health'
      ]
    },

    /* ----------------------------------
     * HOW THIS SOLVES YOUR PROBLEM
     * ---------------------------------- */
    howItSolves: {
      accountability: [
        'Executive-level ownership of outcomes—not advisory recommendations',
        'Authority to make hiring, structural, and resource decisions',
        'Direct board reporting on retention and expansion',
        '25+ years of real operator experience',
        'No junior consultants—the executive does the work'
      ],

      transformation: [
        'Designs and implements structures aligned to your business model',
        'Builds internal leadership so the role becomes unnecessary over time',
        'Creates playbooks, documentation, and scalable processes',
        'Eliminates unclear accountability and duplicated effort',
        'Leaves behind stronger culture and operational maturity'
      ]
    },

    /* ----------------------------------
     * FINANCIAL ADVANTAGE
     * ---------------------------------- */
    financialAdvantage: [
      '20–40% of full-time VP compensation',
      'No benefits, equity, or severance obligations',
      'Flexible engagement adjusted to business needs',
      'ROI driven by measurable NRR improvement',
      'Each 1% NRR gain on $10M ARR equals $100k in retained annual revenue'
    ],

    fasterHiring: [
      'Start in weeks, not months of recruiting',
      'No cultural misfit risk or failed hire burnout',
      'Evaluate working relationship before committing to permanent executive',
      'Fractional leader typically helps recruit your permanent VP, ensuring smooth transition',
    ],

    /* ----------------------------------
     * MEASURABLE RESULTS
     * ---------------------------------- */
    measurableResults: [
      { phase: 'First 30 Days', result: 'Current state assessment and diagnostic' },
      { phase: 'Months 2–3', result: 'Strategy, organizational design, implementation planning' },
      { phase: 'Months 4–6', result: 'Process execution, system rollout, team building' },
      { phase: 'Months 6–12', result: 'Optimization, succession planning, permanent hire readiness' }
    ],

    /* ----------------------------------
     * DETAILED TIMELINE
     * ---------------------------------- */
    detailedTimeline: [
      'Weeks 1–4: Assessment, stakeholder interviews, strategy kickoff',
      'Weeks 5–8: Strategy development, org design, process mapping',
      'Weeks 9–16: Hiring, restructuring, process and system rollout',
      'Weeks 17–24: Execution, optimization, metrics validation',
      'Weeks 25–52: Sustained execution and leadership transition planning'
    ],

    /* ----------------------------------
     * DELIVERABLE FORMAT
     * ---------------------------------- */
    deliverableFormat: [
      'Strategic plan and organizational design documentation',
      'Operational playbooks and process documentation',
      'Board and executive presentation materials',
      'Metrics and reporting frameworks',
      'Team development plans and job descriptions',
      'Technology stack recommendations',
      'Succession planning guidance'
    ],

    /* ----------------------------------
     * CTA
     * ---------------------------------- */
    ctaExtended: `
Schedule a complimentary consultation to discuss your post-sale leadership gaps and explore whether fractional leadership is the right fit.

Schedule a 30‑minute conversation to discuss your post-sale challenges, where you are seeing risk in retention and expansion, and whether a fractional engagement is the right fit. You will leave with a clear view of options – whether we work together or not.
    `
  };

  functionIcons: Record<string, string> = {
    'Fractional VP of Customer Success': 'fa-users',
    'Fractional VP of Professional Services': 'fa-briefcase',
    'Fractional VP of Support / Technical Services': 'fa-headset',
    'Fractional VP of Account Management': 'fa-chart-line',
    'Fractional Chief Customer Officer': 'fa-sitemap'
  };


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

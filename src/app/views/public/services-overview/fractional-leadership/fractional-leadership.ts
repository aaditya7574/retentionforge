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

    overview: `
Post-sale organizations require strategic executive leadership—clear vision, accountability for NRR and churn, organizational architecture, and the authority to make decisions that drive retention and expansion. Yet many SaaS companies between $5M and $50M ARR are not ready for a full-time VP of Customer Success, Chief Customer Officer, VP of Professional Services, VP of Support, or VP of Account Management.
This is where fractional leadership changes the equation.
Fractional Leadership Services provides experienced, acting executive leadership for your post-sale function—whether Customer Success, Professional Services, Support, Account Management, or a combination as a Chief Customer Officer. Your fractional leader becomes an embedded member of your executive team, owning critical metrics, driving strategic initiatives, and building organizational capacity on a flexible basis.
Unlike advisory services or traditional consulting, fractional leadership means real accountability. Your fractional executive owns retention targets, reports to the board, makes hiring and organizational decisions, and implements strategy—not just recommends it.
    `,

    /* ----------------------------------
     * WHAT THIS SERVICE DELIVERS
     * ---------------------------------- */
    deliverables: [
      'Strategic post-sale vision and planning aligned with business model, growth stage, and customer lifecycle',
      'Ownership of retention (GRR), expansion (NRR), churn, and customer satisfaction metrics with board-level reporting',
      'Design of optimal post-sale organizational structure, roles, career paths, and implementation roadmap',
      'Leadership of hiring, performance management, coaching, succession planning, and internal leadership development',
      'Design and implementation of customer lifecycle, onboarding, health scoring, renewals, and expansion processes',
      'Cross-functional alignment with Product, Sales, Finance, and Support including escalation authority',
      'Customer Success Platform and tooling evaluation, vendor selection, and implementation oversight',
      'Voice-of-customer systems, customer health insights, and executive-level risk escalation',
      'Board and executive readiness including materials, KPIs, and post-sale strategy articulation'
    ],

    /* ----------------------------------
     * WHY THIS MATTERS
     * ---------------------------------- */
    whyThisMattersExtended: `
Mid-market SaaS companies often hit a leadership gap in post-sale execution. Growth outpaces founder oversight, existing leaders lack the experience to scale, or boards demand stronger retention and expansion accountability. Fractional leadership fills this gap with experienced executive ownership—without long-term hiring risk.
    `,

    impact: [
      {
        title: 'Too-Big-for-Founder Gap',
        description:
          'You’ve outgrown informal founder or sales-led oversight but cannot yet justify a $220k+ full-time VP.'
      },
      {
        title: 'Weak Incumbent Risk',
        description:
          'Existing post-sale leaders lack the strategic depth or accountability to drive retention and expansion.'
      },
      {
        title: 'High-Stakes Transitions',
        description:
          'You are restructuring, integrating functions, or building expansion revenue and need experienced execution.'
      },
      {
        title: 'Board-Level Pressure',
        description:
          'Your board expects executive ownership of churn, NRR, and customer health with clear reporting.'
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
      'SaaS companies between $5M–$50M ARR with post-sale leadership gaps',
      'Organizations too mature for founder-led oversight but not ready for full-time VP hiring',
      'Companies with underperforming CS, PS, Support, or AM leadership',
      'High-growth teams scaling 2–3× annually',
      'Organizations preparing for fundraising, board scrutiny, or IPO readiness',
      'Companies planning major post-sale restructuring or functional integration',
      'Situations requiring real decision authority—not advisory consulting'
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

We’ll have an honest, no-pressure conversation about your current state, the gaps you’re experiencing, and the outcomes you need—no sales pitch, just strategic clarity.
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

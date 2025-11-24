import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organizational-design-for-post-sale-teams',
  imports: [RouterLink],
  templateUrl: './organizational-design-for-post-sale-teams.html',
  styleUrl: './organizational-design-for-post-sale-teams.scss',
})
export class OrganizationalDesignForPostSaleTeams implements OnInit {
  service = {
    name: 'Organizational Design for Post-Sale Teams',
    slug: 'post-sale-organizational-design',
    shortDescription: 'Build scalable, efficient, and clearly defined post-sale organizations across CS, PS, Support, AM, and Renewals.',

    overview: `As SaaS companies scale, post-sale organizational structures often become misaligned—creating inefficiency, unclear accountability, and poor customer experiences.
  Our Organizational Design for Post-Sale Teams service applies organizational leadership principles and decades of operational expertise to design optimal structures for Customer Success, Professional Services, Technical Support, Account Management, and Renewals. The result is a scalable, efficient, and high-clarity operating model.`,

    deliverables: [
      'Current State Assessment – Deep analysis of existing structures identifying inefficiencies, gaps, redundancies, and scaling barriers',
      'Organizational Structure Design – Detailed org charts defining team structure, reporting lines, span of control, and cross-functional interfaces',
      'Functional Clarity Framework – Clear role definitions and decision rights across CS, PS, Support, AM, and Renewals eliminating overlap',
      'Cross-Functional Operating Model – Governance models, communication protocols, and handoff processes across post-sale functions',
      'Centralized vs. Distributed Model Analysis – Evaluation of whether onboarding, renewals, and support should be centralized or embedded in CS',
      'Skills & Competency Frameworks – Defined capabilities by level with growth paths and development guidance',
      'Manager Layer Design – Recommended manager-to-IC ratios, role expectations, and span-of-control guidelines',
      'Scaling Plan – A phased roadmap showing how structure evolves as the company scales from $20M → $50M → $100M ARR',
      'Change Management Strategy – Communication plan, transition roadmap, and sequencing guidance for smooth implementation',
      'Governance & Decision Rights Matrix – RACI framework defining responsibility, accountability, and cross-team decision ownership',
      // 'Cost Analysis & ROI Model – Financial modeling illustrating headcount cost, efficiency gains, and expected business outcomes'
    ],

    impact: [
      { title: 'Increased Operational Efficiency', description: 'Reduces structural friction and eliminates 20–30% productivity loss caused by unclear or misaligned org design.' },
      { title: 'Clear Accountability & Ownership', description: 'Removes role confusion, reduces handoff failures, and establishes crisp ownership for every customer moment.' },
      { title: 'Scalable Foundation for Growth', description: 'Ensures organizational models evolve smoothly as ARR increases—avoiding expensive reactive reorganizations.' },
      { title: 'Improved Talent Retention', description: 'High-performing employees thrive in well-defined structures that clarify expectations and career paths.' },
      { title: 'Better Customer Experience', description: 'Eliminates duplicate work, missed handoffs, and inconsistent service levels across post-sale teams.' }
    ],

    engagement: {
      duration: '6–8 weeks',
      format: 'Remote + optional on-site workshops',
      involvement: 'Executive interviews · Team surveys · Design validation · Leadership alignment sessions'
    },

    idealFor: [
      'Rapidly scaling SaaS companies (2–3x growth) where structures are breaking',
      'Organizations with unclear accountability or frequent ownership conflicts',
      'Companies planning major scaling initiatives or restructuring efforts',
      'Executives needing expert guidance to redesign post-sale teams intentionally—not reactively'
    ],

    whyThisMattersExtended: `Organizational structure is the invisible architecture that determines whether teams thrive or struggle.
Poorly designed post-sale organizations create cascading friction: inefficiency, unclear accountability, customer handoff failures, and structural churn risks.

Most SaaS companies let structure evolve reactively or copy competitor models—leading to misalignment and costly reorganizations.

Our approach intentionally designs an end-to-end structure aligned with your business goals, customer needs, and growth trajectory. The result is a scalable, efficient, high-clarity operating model that supports long-term retention, revenue expansion, and customer success.`
  };


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

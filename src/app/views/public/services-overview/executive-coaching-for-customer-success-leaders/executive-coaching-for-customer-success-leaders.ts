import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-executive-coaching-for-customer-success-leaders',
  imports: [RouterLink],
  templateUrl: './executive-coaching-for-customer-success-leaders.html',
  styleUrl: './executive-coaching-for-customer-success-leaders.scss',
})
export class ExecutiveCoachingForCustomerSuccessLeaders implements OnInit{
  service = {
  name: 'Executive Coaching for Customer Success Leaders',
  slug: 'executive-coaching-cs-leaders',
  shortDescription: 'Personalized one-on-one coaching for VP and Director-level Customer Success leaders navigating growth, complexity, and executive-level challenges.',

  overview: `Customer Success leaders face one of the most complex executive roles in SaaS—responsible for retention, expansion, and customer health while managing cross-functional relationships and board-level visibility.
  Our Executive Coaching for Customer Success Leaders provides individualized, experience-backed guidance to help CS executives excel in strategic leadership, organizational design, communication, and career growth.`,

  deliverables: [
    'Individualized Leadership Assessment – 360-degree review of leadership strengths, development opportunities, and management style with direct observation and feedback',
    'Strategic Goal Setting – Joint creation of 6–12 month leadership goals tied to retention, expansion, team performance, and career advancement',
    'Bi-Weekly Coaching Sessions – One-hour sessions focused on active challenges, decision-making, leadership skills, and strategic direction',
    'Situational Advisory – On-demand support for time-sensitive issues including board meetings, high-stakes conversations, and crisis management',
    'Metrics & Performance Coaching – Guidance on CS dashboards, KPI interpretation, board reporting, and data-driven decision making',
    'Organizational Design Guidance – Coaching on structuring CS, AM, Renewals, Support, and PS teams for scale and performance',
    'Stakeholder Management Strategies – Techniques for influencing Product, Sales, Marketing, Finance, and executive leadership',
    'Board Presentation Preparation – Review of board materials, narrative coaching, communication refinement, and executive presence development',
    'Career Development Planning – Personalized roadmap covering executive growth, personal branding, and thought leadership opportunities',
    'Playbook Review & Optimization – Expert evaluation of CS strategies, playbooks, and operating models with improvement recommendations',
    // 'Peer Network Access – Introductions to a vetted network of CS executives for shared learning and support',
    // 'Resource Library – Access to CS frameworks, templates, models, and best practices'
  ],

  impact: [
    { title: 'Stronger Executive Presence', description: 'Leaders develop the confidence, clarity, and communication skills needed for board-level and C-suite engagement.' },
    { title: 'Improved Strategic Decision Making', description: 'Coaching elevates leaders from firefighting to strategic, long-term decision making aligned with business goals.' },
    { title: 'Higher Team Performance', description: 'Leaders gain frameworks for team structure, accountability, vision-setting, and management effectiveness.' },
    { title: 'Career Acceleration', description: 'Targeted development, branding, and thought leadership support help executives progress rapidly in their careers.' },
    { title: 'Better Cross-Functional Influence', description: 'Coaching strengthens stakeholder management, collaboration, and organizational alignment.' }
  ],

  engagement: {
    duration: '6–12 months (renewable)',
    format: '1:1 coaching · Bi-weekly sessions · Asynchronous advisory',
    involvement: 'Session preparation · Applying recommendations · Active participation in development'
  },

  idealFor: [
    'First-time VP or Director of Customer Success stepping into executive responsibilities',
    'Experienced CS leaders managing hypergrowth and needing new leadership capabilities',
    'Executives preparing for board meetings, fundraising, or organizational transformation',
    'Leaders seeking a strategic thought partner who understands the CS function deeply'
  ],

  whyThisMattersExtended: `The VP of Customer Success role carries enormous pressure—directly tied to 70–90% of company revenue—yet most leaders operate without adequate support or mentorship.
Traditional executive coaching often lacks the context of post-sale realities, cross-functional complexity, and metric-driven board expectations.

Our coaching is grounded in real-world CS executive experience. Leaders gain a trusted advisor, strategic partner, and sounding board who has lived the challenges they face.
The result is stronger decision making, improved team performance, higher executive confidence, and accelerated career growth.`  
};

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

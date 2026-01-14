import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
declare var bootstrap: any;
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resources',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './resources.html',
  styleUrl: './resources.scss',
})
export class Resources implements OnInit {
  
  resources = [

    {
      title: "Churn Diagnostic",
      description:
        "Discover your real churn drivers with a 5-question diagnostic. Assess whether you’re solving the right problems or optimizing blind—and uncover patterns that point directly to your highest-impact retention improvements.",
      icon: "fa-clipboard-check",
      downloadUrl: "https://www.retentionforge.io/free_content/Churn_Diagnostic.pdf"
    },

    {
      title: "CS Org Design Checklist",
      description:
        "Comprehensive checklist to evaluate whether your CS organization is built to scale or running on heroic effort. Covers segmentation, portfolios, roles, metrics, compensation, and handoffs so you can uncover structural gaps limiting retention and expansion.",
      icon: "fa-list-check",
      downloadUrl: "https://www.retentionforge.io/free_content/CS_Org_Design_Checklist.pdf"
    },

    {
      title: "Professional Services Profitability Assessment",
      description:
        "Evaluate whether your PS organization is a true profit center or an underperforming cost center. Diagnose margins, utilization, pricing, and portfolio design to identify the specific levers that would unlock the largest gains in PS profitability and enterprise value.",
      icon: "fa-layer-group",
      downloadUrl: "https://www.retentionforge.io/free_content/PS-Profitability-Assessment.pdf"
    },

    {
      title: "The Health Score Trap",
      description:
        "Discover the 7 critical mistakes that make health scores fail—too many attributes, wrong weighting, no validation, and more. Get the complete framework to build validated scoring systems that predict churn 90+ days in advance with high-signal metrics your CSMs will actually trust.",
      icon: "fa-chart-line",
      downloadUrl: "https://www.retentionforge.io/free_content/The_Health_Score_Trap.pdf"
    },

    {
      title: "Expansion Opportunity Qualification Matrix",
      description:
        "Systematic approach to finding and prioritizing expansion revenue hiding in your customer base. Define expansion scenarios, score accounts, and qualify opportunities so your team stops waiting for upsell requests and starts driving NRR intentionally.",
      icon: "fa-bullseye",
      downloadUrl: "https://www.retentionforge.io/free_content/Expansion-Qualification-Matrix.pdf"
    },

    {
      title: "Time-to-Value Framework",
      description:
        "The first 30 days determine the next 12 months. Discover why onboarding is the strongest predictor of retention, the three failure patterns that derail most implementations, and a systematic playbook to accelerate time-to-value while improving first-year retention.",
      icon: "fa-gauge-high",
      downloadUrl: "https://www.retentionforge.io/free_content/Time-to-Value-Framework.pdf"
    },

    {
      title: "CS Leadership Assessment",
      description:
        "Self-assessment for Customer Success leaders across five core domains: org design, metrics, cross-functional influence, talent development, and strategic thinking. Identifies strengths, gaps, and the highest-impact areas to focus your leadership development.",
      icon: "fa-briefcase",
      downloadUrl: "https://www.retentionforge.io/free_content/CS-Leadership-Assessment.pdf"
    },

    {
      title: "Customer Segmentation Decision Tree",
      description:
        "Decision tree to design your optimal segmentation model and CSM-to-account ratios. Helps you choose between tier-, vertical-, complexity-, or hybrid-based models so resources match customer value and complexity instead of being allocated ad-hoc.",
      icon: "fa-diagram-project",
      downloadUrl: "https://www.retentionforge.io/free_content/Customer-Segmentation-Decision-Tree.pdf"
    },

    {
      title: "KPI Scorecard & Target-Setting Framework",
      description:
        "Audit your GRR, NRR, logo retention, CSAT, NPS, and CSM load against current B2B SaaS benchmarks, then turn that into a focused KPI hierarchy and 12-month targets for each segment. Use this scorecard with your CEO, CFO, and VP CS to align on what “good” looks like and where your retention and expansion system is underperforming.",
      icon: "fa-chart-column",
      downloadUrl: "https://www.retentionforge.io/free_content/KPI-Scorecard-Framework.pdf"
    },

    {
      title: "Revenue Retention Audit",
      description:
        "Quick audit to assess whether your revenue retention strategy is reactive or truly proactive. Reveals how well you’re using health scores, playbooks, and leading indicators—and which levers would deliver the biggest impact on GRR and NRR.",
      icon: "fa-circle-check",
      downloadUrl: "https://www.retentionforge.io/free_content/Revenue-Retention-Audit.pdf"
    },

    {
      title: "Post-Sale Org Design Blueprint",
      description:
        "Blueprint for designing an intentional post-sale organization across CS, PS, Support, and Account Management. Helps you define roles, handoffs, metrics, and incentives so your post-sale engine scales with ARR instead of becoming a growth bottleneck.",
      icon: "fa-sitemap",
      downloadUrl: "https://www.retentionforge.io/free_content/post_sale_org_blueprint.pdf"
    }

  ];

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
    this.titleService.setTitle(
      'Free Customer Success Frameworks & Resources | RetentionForge'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Download free Customer Success frameworks, assessments, and playbooks. Proven tools to improve retention, expansion, and post-sale performance.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'customer success frameworks, SaaS retention tools, CS playbooks, churn reduction, NRR GRR metrics'
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

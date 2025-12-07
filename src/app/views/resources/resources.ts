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
      status: "available",
      downloadUrl:
        "https://www.retentionforge.io/free_content/Churn_Diagnostic.pdf"
    },
    // Order 1
    {
      title: "CS Org Design Checklist",
      description:
        "Comprehensive checklist to evaluate whether your CS organization is built to scale or running on heroic effort.Covers segmentation, portfolios, roles, metrics, compensation, and handoffs so you can uncover structural gaps limiting retention and expansion.",
      icon: "fa-list-check",
      status: "coming-soon"
    },

    // Order 2 Professional Services Profitability Assessment
    {
      title: "Professional Services Profitability Assessment",
      description:
        "Evaluate whether your PS organization is a true profit center or an underperforming cost center. Diagnose margins, utilization, pricing, and portfolio design to identify the specific levers that would unlock the largest gains in PS profitability and enterprise value.",
      icon: "fa-layer-group",
      status: "coming-soon"
    },

    // Order 3 


    //  Order 4 Customer Health Score Builder Framework
    {
      title: "Customer Health Score Builder Framework",
      description:
        "Step-by-step framework for designing a health score that actually predicts churn. Covers data inventory, attribute selection, weighting, segment-specific models, and validation so your team can move from reactive saves to systematic, early-warning risk detection.",
      icon: "fa-chart-line",
      status: "coming-soon"
    },

    //  Order 5 Expansion Opportunity Qualification Matrix

    {
      title: "Expansion Opportunity Qualification Matrix",
      description:
        "Systematic approach to finding and prioritizing expansion revenue hiding in your customer base. Define expansion scenarios, score accounts, and qualify opportunities so your team stops waiting for upsell requests and starts driving NRR intentionally.",
      icon: "fa-bullseye",
      status: "coming-soon"
    },

    //Order 6
    {
      title: "Time-to-Value Accelerator Checklist",
      description:
        "30-point checklist to shorten implementation timelines by 30–50% while strengthening first-year retention. Walks through five onboarding phases with concrete success metrics so customers reach value fast and stay long-term.",
      icon: "fa-gauge-high",
      status: "coming-soon"
    },

    //Order 7
    {
      title: "CS Leadership Competency Assessment",
      description:
        " Self-assessment for Customer Success leaders across five core domains: org design, metrics, cross-functional influence, talent development, and strategic thinking. Identifies strengths, gaps, and the highest-impact areas to focus your leadership development.",
      icon: "fa-briefcase",
      status: "coming-soon"
    },

    // Order 8
    {
      title: "Customer Segmentation Decision Tree",
      description:
        "Decision tree to design your optimal segmentation model and CSM-to-account ratios. Helps you choose between tier-, vertical-, complexity-, or hybrid-based models so resources match customer value and complexity instead of being allocated ad-hoc.",
      icon: "fa-diagram-project",
      status: "coming-soon"
    },

    //Order 9

    {
      title: "KPI Selection & Target-Setting Framework",
      description:
        " Framework for choosing the right CS metrics and building a metrics hierarchy from company to team to individual. Guides you through metric selection, target-setting, and dashboard design so everyone knows what “good” looks like and how performance is measured.",
      icon: "fa-chart-column",
      status: "coming-soon"
    },

    {
      title: "Revenue Retention Strategy Audit",
      description:
        "Quick audit to assess whether your revenue retention strategy is reactive or truly proactive. Reveals how well you’re using health scores, playbooks, and leading indicators—and which levers would deliver the biggest impact on GRR and NRR.",
      icon: "fa-circle-check",
      status: "coming-soon",

    },

    {
      title: "Post-Sale Org Design Blueprint",
      description:
        "Blueprint for designing an intentional post-sale organization across CS, PS, Support, and Account Management. Helps you define roles, handoffs, metrics, and incentives so your post-sale engine scales with ARR instead of becoming a growth bottleneck.",
      icon: "fa-sitemap",
      status: "coming-soon"
    },





    // {
    //   title: "Renewal Risk Early Warning System",
    //   description:
    //     "Eight leading indicators that detect churn risk 90 days before renewal. Includes intervention playbooks and save-rate tracking.",
    //   icon: "fa-triangle-exclamation",
    //   status: "coming-soon"
    // },


  ];

  notifyForm!: FormGroup;
  selectedResource = '';
  showSuccess = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.notifyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['']
    });
    // this.titleService.setTitle('Free Customer Success Resources & Frameworks | RetentionForge');

    this.metaService.updateTag({
      name: 'description',
      content: 'Download free Customer Success frameworks, assessments, and checklists. Build your retention engine with battle-tested tools from RetentionForge.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'customer success resources, free frameworks, retention tools, CS templates, assessment templates'
    });
  }

  openNotifyModal(resourceName: string) {
    this.selectedResource = resourceName;
    this.showSuccess = false;
    this.notifyForm.reset();

    const modalEl = document.getElementById('notifyModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  submitNotify() {
    // this.submittedNotify = true;
    // this.showNotifySuccess = this.showNotifyError = false;

    if (this.notifyForm.invalid) {
      return;
    }

    this.showSuccess = true;

    const formData = new FormData();
    formData.append("fullName", this.notifyForm.get('fullName')?.value);
    formData.append("email", this.notifyForm.get('email')?.value);
    formData.append("company", this.notifyForm.get('company')?.value || "");
    formData.append("resource", this.selectedResource);  // extra field

    // Send email using Formspree (same as onSubmit)
    this.http.post("https://formspree.io/f/xjkddwyk", formData, {
      headers: { "Accept": "application/json" }
    })
      .subscribe({
        next: () => {
          // this.isNotifySubmitting = false;
          // this.showNotifySuccess = true;
          this.notifyForm.reset();

          // Auto-hide modal after 2 seconds
          setTimeout(() => {
            const modalEl = document.getElementById('notifyModal');
            // @ts-ignore
            const modal = bootstrap.Modal.getInstance(modalEl);
            modal.hide();

            this.showSuccess = false;
          }, 1000);
        },

        error: () => {
          this.showSuccess = false;

        }
      });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

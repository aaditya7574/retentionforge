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
      title: "Revenue Retention Strategy Audit",
      description:
        "Quick diagnostic to assess your retention strategy maturity. Reveals whether you’re reactive or proactive—and which levers would have the highest impact on GRR.",
      icon: "fa-circle-check",
      status: "available",
      downloadUrl:
        "https://www.retentionforge.io/free_content/Churn_Diagnostic.pdf"
    },

    {
      title: "Professional Services Profitability Assessment",
      description:
        "Evaluate whether your PS organization is a profit center or cost center. Identify opportunities to improve margins while maintaining customer outcomes.",
      icon: "fa-layer-group",
      status: "coming-soon"
    },

    {
      title: "Customer Health Score Builder Framework",
      description:
        "Step-by-step framework for building health scoring systems that actually predict churn. Includes attribute selection, weighting methodology, and validation process.",
      icon: "fa-chart-line",
      status: "coming-soon"
    },

    {
      title: "Expansion Opportunity Qualification Matrix",
      description:
        "Systematic approach to identifying and qualifying expansion opportunities. Transform expansion from opportunistic to strategic with clear playbooks and scoring criteria.",
      icon: "fa-bullseye",
      status: "coming-soon"
    },

    {
      title: "Post-Sale Org Design Blueprint",
      description:
        "Design intentional organizational structures for CS, PS, Support, and AM teams. Includes roles, responsibilities, handoffs, and compensation alignment.",
      icon: "fa-sitemap",
      status: "coming-soon"
    },

    {
      title: "Time-to-Value Accelerator Checklist",
      description:
        "30-point checklist across onboarding phases. Accelerate implementation timelines by 30–50% while improving first-year retention through systematic process design.",
      icon: "fa-gauge-high",
      status: "coming-soon"
    },

    {
      title: "CS Leadership Competency Assessment",
      description:
        "Self-assessment across five leadership domains including design, metrics, influence, talent development, and strategic thinking. Identifies gaps & priorities.",
      icon: "fa-briefcase",
      status: "coming-soon"
    },

    {
      title: "KPI Selection & Target-Setting Framework",
      description:
        "Define the metrics that matter. Includes leading/lagging indicators, cascading targets, and dashboard structures for varying org levels.",
      icon: "fa-chart-column",
      status: "coming-soon"
    },

    {
      title: "Customer Segmentation Decision Tree",
      description:
        "Choose the right segmentation model with ideal CSM-to-account ratios. Includes segmentation types, tiering, and scaling guidance.",
      icon: "fa-diagram-project",
      status: "coming-soon"
    },

    {
      title: "Renewal Risk Early Warning System",
      description:
        "Eight leading indicators that detect churn risk 90 days before renewal. Includes intervention playbooks and save-rate tracking.",
      icon: "fa-triangle-exclamation",
      status: "coming-soon"
    },

    {
      title: "CS Org Design Checklist",
      description:
        "Framework for designing scalable CS orgs—roles, responsibilities, compensation, career paths, and scaling systems.",
      icon: "fa-list-check",
      status: "coming-soon"
    }
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

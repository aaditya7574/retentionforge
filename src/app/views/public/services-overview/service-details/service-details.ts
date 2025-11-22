import { Component } from '@angular/core';
import { CHURN_ANALYSIS_SERVICE } from '../schemas/curm-analysis-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss',
})
export class ServiceDetails {
  service!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug === 'churn-analysis') {
      this.service = CHURN_ANALYSIS_SERVICE;
    }
  }
}

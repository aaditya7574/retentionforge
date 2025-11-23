import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPIFrameworkMetricsDesign } from './kpi-framework-metrics-design';

describe('KPIFrameworkMetricsDesign', () => {
  let component: KPIFrameworkMetricsDesign;
  let fixture: ComponentFixture<KPIFrameworkMetricsDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KPIFrameworkMetricsDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KPIFrameworkMetricsDesign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

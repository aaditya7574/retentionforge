import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalServicesRevenueOptimization } from './professional-services-revenue-optimization';

describe('ProfessionalServicesRevenueOptimization', () => {
  let component: ProfessionalServicesRevenueOptimization;
  let fixture: ComponentFixture<ProfessionalServicesRevenueOptimization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalServicesRevenueOptimization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalServicesRevenueOptimization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

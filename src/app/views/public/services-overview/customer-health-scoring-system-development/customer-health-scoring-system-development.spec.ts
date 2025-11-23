import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHealthScoringSystemDevelopment } from './customer-health-scoring-system-development';

describe('CustomerHealthScoringSystemDevelopment', () => {
  let component: CustomerHealthScoringSystemDevelopment;
  let fixture: ComponentFixture<CustomerHealthScoringSystemDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerHealthScoringSystemDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHealthScoringSystemDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

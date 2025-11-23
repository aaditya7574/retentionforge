import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveCoachingForCustomerSuccessLeaders } from './executive-coaching-for-customer-success-leaders';

describe('ExecutiveCoachingForCustomerSuccessLeaders', () => {
  let component: ExecutiveCoachingForCustomerSuccessLeaders;
  let fixture: ComponentFixture<ExecutiveCoachingForCustomerSuccessLeaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveCoachingForCustomerSuccessLeaders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveCoachingForCustomerSuccessLeaders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

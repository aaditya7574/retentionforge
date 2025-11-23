import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingImplementationOptimization } from './onboarding-implementation-optimization';

describe('OnboardingImplementationOptimization', () => {
  let component: OnboardingImplementationOptimization;
  let fixture: ComponentFixture<OnboardingImplementationOptimization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingImplementationOptimization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingImplementationOptimization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

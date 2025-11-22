import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurnAnalysisStudies } from './churn-analysis-studies';

describe('ChurnAnalysisStudies', () => {
  let component: ChurnAnalysisStudies;
  let fixture: ComponentFixture<ChurnAnalysisStudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurnAnalysisStudies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurnAnalysisStudies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

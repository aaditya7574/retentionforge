import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueRetentionStrategyOptimization } from './revenue-retention-strategy-optimization';

describe('RevenueRetentionStrategyOptimization', () => {
  let component: RevenueRetentionStrategyOptimization;
  let fixture: ComponentFixture<RevenueRetentionStrategyOptimization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueRetentionStrategyOptimization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueRetentionStrategyOptimization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

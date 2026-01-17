import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionalLeadership } from './fractional-leadership';

describe('FractionalLeadership', () => {
  let component: FractionalLeadership;
  let fixture: ComponentFixture<FractionalLeadership>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionalLeadership]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FractionalLeadership);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesWeSolve } from './challenges-we-solve';

describe('ChallengesWeSolve', () => {
  let component: ChallengesWeSolve;
  let fixture: ComponentFixture<ChallengesWeSolve>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesWeSolve]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengesWeSolve);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

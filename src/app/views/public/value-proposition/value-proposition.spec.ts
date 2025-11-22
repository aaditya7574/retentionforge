import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueProposition } from './value-proposition';

describe('ValueProposition', () => {
  let component: ValueProposition;
  let fixture: ComponentFixture<ValueProposition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueProposition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueProposition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

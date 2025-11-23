import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSuccessDepartment } from './custome-success-department';

describe('CustomeSuccessDepartment', () => {
  let component: CustomeSuccessDepartment;
  let fixture: ComponentFixture<CustomeSuccessDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeSuccessDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeSuccessDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

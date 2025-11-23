import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementExpansionStrategy } from './account-management-expansion-strategy';

describe('AccountManagementExpansionStrategy', () => {
  let component: AccountManagementExpansionStrategy;
  let fixture: ComponentFixture<AccountManagementExpansionStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountManagementExpansionStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountManagementExpansionStrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

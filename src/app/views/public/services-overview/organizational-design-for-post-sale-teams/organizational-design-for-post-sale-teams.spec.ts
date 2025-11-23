import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalDesignForPostSaleTeams } from './organizational-design-for-post-sale-teams';

describe('OrganizationalDesignForPostSaleTeams', () => {
  let component: OrganizationalDesignForPostSaleTeams;
  let fixture: ComponentFixture<OrganizationalDesignForPostSaleTeams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationalDesignForPostSaleTeams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationalDesignForPostSaleTeams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsListingComponent } from './rewards-listing.component';

describe('RewardsListingComponent', () => {
  let component: RewardsListingComponent;
  let fixture: ComponentFixture<RewardsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

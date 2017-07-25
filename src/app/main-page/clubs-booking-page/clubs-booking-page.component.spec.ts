import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsBookingPageComponent } from './clubs-booking-page.component';

describe('ClubsBookingPageComponent', () => {
  let component: ClubsBookingPageComponent;
  let fixture: ComponentFixture<ClubsBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

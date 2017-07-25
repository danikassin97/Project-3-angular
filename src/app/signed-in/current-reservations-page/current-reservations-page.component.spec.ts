import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReservationsPageComponent } from './current-reservations-page.component';

describe('CurrentReservationsPageComponent', () => {
  let component: CurrentReservationsPageComponent;
  let fixture: ComponentFixture<CurrentReservationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentReservationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

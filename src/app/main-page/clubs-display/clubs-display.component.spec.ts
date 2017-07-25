import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsDisplayComponent } from './clubs-display.component';

describe('ClubsDisplayComponent', () => {
  let component: ClubsDisplayComponent;
  let fixture: ComponentFixture<ClubsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTablesPageComponent } from './previous-tables-page.component';

describe('PreviousTablesPageComponent', () => {
  let component: PreviousTablesPageComponent;
  let fixture: ComponentFixture<PreviousTablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

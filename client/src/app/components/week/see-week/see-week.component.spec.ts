import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWeekComponent } from './see-week.component';

describe('SeeWeekComponent', () => {
  let component: SeeWeekComponent;
  let fixture: ComponentFixture<SeeWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

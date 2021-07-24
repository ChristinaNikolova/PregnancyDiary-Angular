import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDiaryComponent } from './see-diary.component';

describe('SeeDiaryComponent', () => {
  let component: SeeDiaryComponent;
  let fixture: ComponentFixture<SeeDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

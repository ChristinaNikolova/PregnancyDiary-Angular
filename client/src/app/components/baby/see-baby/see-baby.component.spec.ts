import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBabyComponent } from './see-baby.component';

describe('SeeBabyComponent', () => {
  let component: SeeBabyComponent;
  let fixture: ComponentFixture<SeeBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

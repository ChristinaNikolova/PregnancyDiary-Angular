import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBabyComponent } from './update-baby.component';

describe('UpdateBabyComponent', () => {
  let component: UpdateBabyComponent;
  let fixture: ComponentFixture<UpdateBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

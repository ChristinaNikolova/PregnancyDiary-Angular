import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyPictureComponent } from './baby-picture.component';

describe('BabyPictureComponent', () => {
  let component: BabyPictureComponent;
  let fixture: ComponentFixture<BabyPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

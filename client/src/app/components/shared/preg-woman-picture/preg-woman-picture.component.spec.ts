import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregWomanPictureComponent } from './preg-woman-picture.component';

describe('PregWomanPictureComponent', () => {
  let component: PregWomanPictureComponent;
  let fixture: ComponentFixture<PregWomanPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregWomanPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregWomanPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

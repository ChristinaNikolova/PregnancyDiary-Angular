import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryPictureComponent } from './diary-picture.component';

describe('DiaryPictureComponent', () => {
  let component: DiaryPictureComponent;
  let fixture: ComponentFixture<DiaryPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

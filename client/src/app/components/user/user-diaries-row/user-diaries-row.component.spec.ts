import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiariesRowComponent } from './user-diaries-row.component';

describe('UserDiariesRowComponent', () => {
  let component: UserDiariesRowComponent;
  let fixture: ComponentFixture<UserDiariesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiariesRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiariesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

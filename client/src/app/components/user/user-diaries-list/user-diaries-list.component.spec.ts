import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiariesListComponent } from './user-diaries-list.component';

describe('UserDiariesListComponent', () => {
  let component: UserDiariesListComponent;
  let fixture: ComponentFixture<UserDiariesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiariesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

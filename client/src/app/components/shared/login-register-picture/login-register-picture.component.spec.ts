import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterPictureComponent } from './login-register-picture.component';

describe('LoginRegisterPictureComponent', () => {
  let component: LoginRegisterPictureComponent;
  let fixture: ComponentFixture<LoginRegisterPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

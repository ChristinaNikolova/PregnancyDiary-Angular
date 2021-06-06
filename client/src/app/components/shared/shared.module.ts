import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRegisterPictureComponent } from './login-register-picture/login-register-picture.component';

@NgModule({
  declarations: [
  LoginRegisterPictureComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    LoginRegisterPictureComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRegisterPictureComponent } from './login-register-picture/login-register-picture.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
  LoginRegisterPictureComponent,
  NotFoundComponent
],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    LoginRegisterPictureComponent
  ]
})
export class SharedModule { }

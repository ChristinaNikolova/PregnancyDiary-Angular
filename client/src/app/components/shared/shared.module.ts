import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRegisterPictureComponent } from './login-register-picture/login-register-picture.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DiaryPictureComponent } from './diary-picture/diary-picture.component';
import { BabyPictureComponent } from './baby-picture/baby-picture.component';
import { PregWomanPictureComponent } from './preg-woman-picture/preg-woman-picture.component';

@NgModule({
  declarations: [
  LoginRegisterPictureComponent,
  NotFoundComponent,
  DiaryPictureComponent,
  BabyPictureComponent,
  PregWomanPictureComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoginRegisterPictureComponent,
    DiaryPictureComponent,
    BabyPictureComponent,
    PregWomanPictureComponent
  ]
})
export class SharedModule { }

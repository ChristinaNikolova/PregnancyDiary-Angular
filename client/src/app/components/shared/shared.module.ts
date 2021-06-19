import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRegisterPictureComponent } from './login-register-picture/login-register-picture.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentsCurrentArticleComponent } from '../comment/comments-current-article/comments-current-article.component';
import { SingleCommentComponent } from '../comment/single-comment/single-comment.component';

@NgModule({
  declarations: [
  LoginRegisterPictureComponent,
  NotFoundComponent,
  CommentsCurrentArticleComponent,
  SingleCommentComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoginRegisterPictureComponent,
    CommentsCurrentArticleComponent,
    SingleCommentComponent
  ]
})
export class SharedModule { }

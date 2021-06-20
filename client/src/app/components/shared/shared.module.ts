import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginRegisterPictureComponent } from './login-register-picture/login-register-picture.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentsCurrentArticleComponent } from '../comment/comments-current-article/comments-current-article.component';
import { SingleCommentComponent } from '../comment/single-comment/single-comment.component';
import { CreateCommentComponent } from '../comment/create-comment/create-comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  LoginRegisterPictureComponent,
  NotFoundComponent,
  CommentsCurrentArticleComponent,
  SingleCommentComponent,
  CreateCommentComponent
],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginRegisterPictureComponent,
    CommentsCurrentArticleComponent,
    SingleCommentComponent,
    CreateCommentComponent
  ]
})
export class SharedModule { }

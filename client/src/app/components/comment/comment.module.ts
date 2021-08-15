import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommentsCurrentArticleComponent } from './comments-current-article/comments-current-article.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';

@NgModule({
  declarations: [
    CommentsCurrentArticleComponent,
    SingleCommentComponent,
    CreateCommentComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  exports: [
    CommentsCurrentArticleComponent
  ],
})
export class CommentModule {}

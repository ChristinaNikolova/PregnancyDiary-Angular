import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SingleArticleComponent } from './single-article/single-article.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    SingleArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: 'all', component: ArticlesListComponent },
    ]),
  ]
})
export class ArticleModule { }

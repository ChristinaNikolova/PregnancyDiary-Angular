import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticlesCategoriesListComponent } from './articles-categories-list/articles-categories-list.component';
import { SingleArticleCategoryComponent } from './single-article-category/single-article-category.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { OrderArticlesComponent } from './order-articles/order-articles.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    SingleArticleComponent,
    ArticlesCategoriesListComponent,
    SingleArticleCategoryComponent,
    SearchArticleComponent,
    OrderArticlesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: 'all', component: ArticlesListComponent },
    ]),
  ],
})
export class ArticleModule {}

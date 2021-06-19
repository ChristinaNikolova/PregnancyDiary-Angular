import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticlesCategoriesListComponent } from './articles-categories-list/articles-categories-list.component';
import { SingleArticleCategoryComponent } from './single-article-category/single-article-category.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { OrderArticlesComponent } from './order-articles/order-articles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ByCategoryComponent } from './by-category/by-category.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SingleArticleResolver } from 'src/app/core/resolvers/single-article.resolver';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArticlesListComponent,
    SingleArticleComponent,
    ArticlesCategoriesListComponent,
    SingleArticleCategoryComponent,
    SearchArticleComponent,
    OrderArticlesComponent,
    ByCategoryComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: 'all', component: ArticlesListComponent },
      { path: 'by-category/:id', component: ByCategoryComponent },
      { path: 'current-article/:id', component: ArticleDetailsComponent, resolve: { singleArticle: SingleArticleResolver }  },
    ])
  ],
})
export class ArticleModule {}

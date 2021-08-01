import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UpdateCategoryResolver } from 'src/app/core/resolvers/update-category.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCategoriesComponent } from './category/all-categories/all-categories.component';
import { CategorySingleRowComponent } from './category/category-single-row/category-single-row.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { AllArticlesComponent } from './article/all-articles/all-articles.component';
import { ArticleSingleRowComponent } from './article/article-single-row/article-single-row.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { UpdateArticleResolver } from 'src/app/core/resolvers/update-article.resolver';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent, 
    AllCategoriesComponent, 
    CategorySingleRowComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    AllArticlesComponent,
    ArticleSingleRowComponent,
    UpdateArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: AllCategoriesComponent },
      { path: 'categories/update/:id', component: UpdateCategoryComponent, resolve: { updateCategory: UpdateCategoryResolver} },
      { path: 'categories/create', component: CreateCategoryComponent },
      { path: 'articles', component: AllArticlesComponent },
      { path: 'articles/update/:id', component: UpdateArticleComponent, resolve: {updateArticle: UpdateArticleResolver} },
      { path: 'articles/create', component: CreateArticleComponent }
    ]),
    SharedModule
  ]
})
export class AdministrationModule { }

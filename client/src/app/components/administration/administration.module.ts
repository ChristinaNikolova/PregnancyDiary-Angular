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

@NgModule({
  declarations: [
    DashboardComponent, 
    AllCategoriesComponent, 
    CategorySingleRowComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: AllCategoriesComponent },
      { path: 'categories/update/:id', component: UpdateCategoryComponent, resolve: { updateCategory: UpdateCategoryResolver} },
      { path: 'categories/create', component: CreateCategoryComponent }
    ])
  ]
})
export class AdministrationModule { }

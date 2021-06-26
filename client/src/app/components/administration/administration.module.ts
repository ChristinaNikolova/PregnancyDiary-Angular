import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UpdateCategoryResolver } from 'src/app/core/resolvers/update-category.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCategoriesComponent } from './category/all-categories/all-categories.component';
import { CategorySingleRowComponent } from './category/category-single-row/category-single-row.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent, 
    AllCategoriesComponent, 
    CategorySingleRowComponent,
    UpdateCategoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: AllCategoriesComponent },
      { path: 'categories/update/:id', component: UpdateCategoryComponent, resolve: { updateCategory: UpdateCategoryResolver} }
    ])
  ]
})
export class AdministrationModule { }

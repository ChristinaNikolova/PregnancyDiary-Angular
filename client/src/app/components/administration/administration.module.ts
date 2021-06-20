import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCategoriesComponent } from './category/all-categories/all-categories.component';
import { CategorySingleRowComponent } from './category/category-single-row/category-single-row.component';

@NgModule({
  declarations: [DashboardComponent, AllCategoriesComponent, CategorySingleRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: AllCategoriesComponent }
    ])
  ]
})
export class AdministrationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateWeekComponent } from './create-week/create-week.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateWeekComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        { path: 'create/:id', component: CreateWeekComponent },
      ]
    ),
    SharedModule
  ]
})
export class WeekModule { }

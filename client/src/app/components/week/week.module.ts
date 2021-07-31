import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateWeekComponent } from './create-week/create-week.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeeksListComponent } from './weeks-list/weeks-list.component';
import { WeeksRowComponent } from './weeks-row/weeks-row.component';

@NgModule({
  declarations: [
    CreateWeekComponent,
    WeeksListComponent,
    WeeksRowComponent
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
  ],
  exports:[
    WeeksListComponent
  ]
})
export class WeekModule { }

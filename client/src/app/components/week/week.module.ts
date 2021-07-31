import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateWeekComponent } from './create-week/create-week.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeeksListComponent } from './weeks-list/weeks-list.component';
import { WeeksRowComponent } from './weeks-row/weeks-row.component';
import { UpdateWeekComponent } from './update-week/update-week.component';
import { UpdateWeekResolver } from 'src/app/core/resolvers/update-week.resolver';

@NgModule({
  declarations: [
    CreateWeekComponent,
    WeeksListComponent,
    WeeksRowComponent,
    UpdateWeekComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        { path: 'create/:id', component: CreateWeekComponent },
        { path: 'update-week/:id', component: UpdateWeekComponent, resolve: { updateWeek: UpdateWeekResolver } }
      ]
    ),
    SharedModule
  ],
  exports:[
    WeeksListComponent
  ]
})
export class WeekModule { }

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
import { SeeWeekComponent } from './see-week/see-week.component';

@NgModule({
  declarations: [
    CreateWeekComponent,
    WeeksListComponent,
    WeeksRowComponent,
    UpdateWeekComponent,
    SeeWeekComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        { path: 'create/:id', component: CreateWeekComponent },
        { path: 'update-week/:id', component: UpdateWeekComponent, resolve: { updateWeek: UpdateWeekResolver } },
        { path: 'see-week/:id', component: SeeWeekComponent, resolve: { singleWeek: UpdateWeekResolver } }
      ]
    ),
    SharedModule
  ],
  exports:[
    WeeksListComponent
  ]
})
export class WeekModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateBabyComponent } from './create-baby/create-baby.component';
import { SeeBabyComponent } from './see-baby/see-baby.component';
import { UpdateBabyComponent } from './update-baby/update-baby.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateBabyComponent,
    SeeBabyComponent,
    UpdateBabyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create/:id', component: CreateBabyComponent },
      { path: 'update/:id/:diaryId', component: UpdateBabyComponent }
    ]),
    SharedModule
  ],
  exports: [
    SeeBabyComponent
  ]
})
export class BabyModule { }

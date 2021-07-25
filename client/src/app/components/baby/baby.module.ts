import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateBabyComponent } from './create-baby/create-baby.component';
import { SeeBabyComponent } from './see-baby/see-baby.component';

@NgModule({
  declarations: [
    CreateBabyComponent,
    SeeBabyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create/:id', component: CreateBabyComponent }
    ]),
  ],
  exports: [
    SeeBabyComponent
  ]
})
export class BabyModule { }

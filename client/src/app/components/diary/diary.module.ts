import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateDiaryComponent } from './create-diary/create-diary.component';
import { SeeDiaryComponent } from './see-diary/see-diary.component';
import { UpdateDiaryComponent } from './update-diary/update-diary.component';

@NgModule({
  declarations: [CreateDiaryComponent, SeeDiaryComponent, UpdateDiaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create', component: CreateDiaryComponent },
      { path: 'all', component: SeeDiaryComponent },
    ]),
  ],
})
export class DiaryModule {}

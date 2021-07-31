import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateDiaryComponent } from './create-diary/create-diary.component';
import { SeeDiaryComponent } from './see-diary/see-diary.component';
import { UpdateDiaryComponent } from './update-diary/update-diary.component';
import { UpdateDiaryResolver } from 'src/app/core/resolvers/update-diary.resolver';
import { BabyModule } from '../baby/baby.module';
import { SingleBabyResolver } from 'src/app/core/resolvers/single-baby.resolver';
import { SharedModule } from '../shared/shared.module';
import { WeekModule } from '../week/week.module';

@NgModule({
  declarations: [
    CreateDiaryComponent, 
    SeeDiaryComponent, 
    UpdateDiaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create', component: CreateDiaryComponent },
      { path: 'update/:id', component: UpdateDiaryComponent, resolve: { updateDiary: UpdateDiaryResolver } },
      { path: 'see/:id', component: SeeDiaryComponent, resolve: { singleBaby: SingleBabyResolver } }
    ]),
    BabyModule,
    WeekModule,
    SharedModule
  ],
})
export class DiaryModule {}

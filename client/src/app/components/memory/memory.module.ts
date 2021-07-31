import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateMemoryComponent } from './create-memory/create-memory.component';

@NgModule({
  declarations: [
    CreateMemoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'create/:id', component: CreateMemoryComponent },
    ]),
    SharedModule
  ]
})
export class MemoryModule { }

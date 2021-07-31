import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import { MemoriesListComponent } from './memories-list/memories-list.component';
import { MemoryRowComponent } from './memory-row/memory-row.component';

@NgModule({
  declarations: [
    CreateMemoryComponent,
    MemoriesListComponent,
    MemoryRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create/:id', component: CreateMemoryComponent },
    ]),
    SharedModule
  ],
  exports:[
    MemoriesListComponent
  ]
})
export class MemoryModule { }

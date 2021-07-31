import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import { MemoriesListComponent } from './memories-list/memories-list.component';
import { MemoryRowComponent } from './memory-row/memory-row.component';
import { UpdateMemoryComponent } from './update-memory/update-memory.component';
import { UpdateMemoryResolver } from 'src/app/core/resolvers/update-memory.resolver';

@NgModule({
  declarations: [
    CreateMemoryComponent,
    MemoriesListComponent,
    MemoryRowComponent,
    UpdateMemoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'create-my-memory/:id', component: CreateMemoryComponent },
      { path: 'update-my-memory/:id', component: UpdateMemoryComponent, resolve: { updateMemory: UpdateMemoryResolver } },
    ]),
    SharedModule
  ],
  exports:[
    MemoriesListComponent
  ]
})
export class MemoryModule { }

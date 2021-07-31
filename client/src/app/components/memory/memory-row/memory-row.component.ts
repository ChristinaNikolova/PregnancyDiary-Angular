import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MemoriesService } from 'src/app/core/services/memory/memories.service';
import IMemoryDetails from '../../shared/models/memory/IMemoryDetails';

@Component({
  selector: '[app-memory-row]',
  templateUrl: './memory-row.component.html',
  styleUrls: ['./memory-row.component.css'],
})
export class MemoryRowComponent {
  @Input() memory: IMemoryDetails;
  @Output() removeMemoryEventEmitter = new EventEmitter();

  constructor(private memoriesService: MemoriesService) {}

  remove(): void {
    this.memoriesService.remove(this.memory.id).subscribe((_) => {
      this.removeMemoryEventEmitter.emit();
    });
  }
}

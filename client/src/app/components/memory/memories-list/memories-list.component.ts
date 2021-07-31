import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MemoriesService } from 'src/app/core/services/memory/memories.service';
import IMemoryDetails from '../../shared/models/memory/IMemoryDetails';

@Component({
  selector: 'app-memories-list',
  templateUrl: './memories-list.component.html',
  styleUrls: ['./memories-list.component.css'],
})
export class MemoriesListComponent implements OnInit {
  memories$: Observable<IMemoryDetails[]>;

  constructor(
    private memoriesService: MemoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    const weekId = this.route.snapshot.params['id'];
    this.memories$ = this.memoriesService.allCurrentWeek(weekId);
  }
}

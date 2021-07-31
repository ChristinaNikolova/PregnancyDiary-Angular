import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WeeksService } from 'src/app/core/services/week/weeks.service';
import IWeekRow from '../../shared/models/week/IWeekRow';

@Component({
  selector: 'app-weeks-list',
  templateUrl: './weeks-list.component.html',
  styleUrls: ['./weeks-list.component.css'],
})
export class WeeksListComponent implements OnInit {
  @Input() diaryId: string;
  weeks$: Observable<IWeekRow[]>;

  constructor(private weeksService: WeeksService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.weeks$ = this.weeksService.getAllCurrentDiary(this.diaryId);
  }
}

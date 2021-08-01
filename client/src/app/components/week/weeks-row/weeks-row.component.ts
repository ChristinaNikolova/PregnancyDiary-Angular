import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { WeeksService } from 'src/app/core/services/week/weeks.service';
import IWeekRow from '../../shared/models/week/IWeekRow';

@Component({
  selector: '[app-weeks-row]',
  templateUrl: './weeks-row.component.html',
  styleUrls: ['./weeks-row.component.css'],
})
export class WeeksRowComponent implements OnInit {
  @Input() week: IWeekRow;
  @Output() removeWeekEventEmitter = new EventEmitter();
  id: string

  constructor(private weeksService: WeeksService) {}

  ngOnInit(): void {
    this.id = this.week.id;
  }

  remove(): void {
    this.weeksService.remove(this.week.id).subscribe((_) => {
      this.removeWeekEventEmitter.emit();
    });
  }
}

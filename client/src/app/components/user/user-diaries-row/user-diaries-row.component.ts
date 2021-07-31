import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DiariesService } from 'src/app/core/services/diary/diaries.service';
import IDiaryRow from '../../shared/models/diary/IDiaryRow';

@Component({
  selector: '[app-user-diaries-row]',
  templateUrl: './user-diaries-row.component.html',
  styleUrls: ['./user-diaries-row.component.css'],
})
export class UserDiariesRowComponent {
  @Input() diary: IDiaryRow;
  @Output() removeDiaryEventEmitter = new EventEmitter();

  constructor(private diariesService: DiariesService) {}

  remove(): void {
    this.diariesService.remove(this.diary.id).subscribe((_) => {
      this.removeDiaryEventEmitter.emit();
    });
  }
}

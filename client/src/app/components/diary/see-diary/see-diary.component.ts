import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiariesService } from 'src/app/core/services/diary/diaries.service';
import IDiaryDetails from '../../shared/models/diary/IDiaryDetails';

@Component({
  selector: 'app-see-diary',
  templateUrl: './see-diary.component.html',
  styleUrls: ['./see-diary.component.css'],
})
export class SeeDiaryComponent implements OnInit {
  diary: IDiaryDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private diariesService: DiariesService
    ) {}

  ngOnInit(): void {
   this.load();
  }

  load(): void {
    const id: string = this.route.snapshot.params['id'];

    this.diariesService.getDetails(id).subscribe((diary) => {
      this.diary = diary;
    });
  }
}

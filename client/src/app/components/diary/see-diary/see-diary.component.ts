import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import IDiaryDetails from '../../shared/models/diary/IDiaryDetails';

@Component({
  selector: 'app-see-diary',
  templateUrl: './see-diary.component.html',
  styleUrls: ['./see-diary.component.css'],
})
export class SeeDiaryComponent implements OnInit {
  diary: IDiaryDetails;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.diary = this.route.snapshot.data['singleDiary'];
  }
}

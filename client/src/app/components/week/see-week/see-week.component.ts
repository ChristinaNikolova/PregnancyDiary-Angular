import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import IUpdateWeek from '../../shared/models/week/IUpdateWeek';

@Component({
  selector: 'app-see-week',
  templateUrl: './see-week.component.html',
  styleUrls: ['./see-week.component.css'],
})
export class SeeWeekComponent implements OnInit {
  week: IUpdateWeek;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.week = this.route.snapshot.data['singleWeek'];
  }
}

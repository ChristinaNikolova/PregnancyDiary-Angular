import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { WeeksService } from 'src/app/core/services/week/weeks.service';
import IUpdateWeek from '../../shared/models/week/IUpdateWeek';

@Component({
  selector: 'app-update-week',
  templateUrl: './update-week.component.html',
  styleUrls: ['./update-week.component.css'],
})
export class UpdateWeekComponent implements OnInit {
  updateForm: FormGroup;
  moods: string[];
  week: IUpdateWeek;

  constructor(
    private fb: FormBuilder,
    private weeksService: WeeksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moods = ['Happy', 'Sad', 'Surprised', 'Melancholic', 'Angry'];
  }

  get f() {
    return this.updateForm.controls;
  }

  ngOnInit(): void {
    this.week = this.route.snapshot.data['updateWeek'];

    this.updateForm = this.fb.group({
      number: [this.week.number, []],
      myWeight: [this.week.myWeight, [Validators.required]],
      myBellySize: [this.week.myBellySize, [Validators.required]],
      mood: [this.week.mood, [Validators.required]],
      babyWeight: [this.week.babyWeight, [Validators.required]],
      babyHeight: [this.week.babyHeight, [Validators.required]],
    });
  }

  update(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.weeksService
      .update(this.updateForm.value, this.week.id, this.week.diaryId)
      .subscribe((_) => {
        this.router.navigate([`/weeks/see-week/${this.week.id}`]);
      });
  }
}

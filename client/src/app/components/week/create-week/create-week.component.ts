import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeksService } from 'src/app/core/services/week/weeks.service';

const WEEK_MIN = 1;
const WEEK_MAX = 44;

@Component({
  selector: 'app-create-week',
  templateUrl: './create-week.component.html',
  styleUrls: ['./create-week.component.css'],
})
export class CreateWeekComponent implements OnInit {
  createForm: FormGroup;
  moods: string[];

  constructor(
    private fb: FormBuilder,
    private weeksService: WeeksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moods = ['Happy', 'Sad', 'Surprised', 'Melancholic', 'Angry'];
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(WEEK_MIN), Validators.max(WEEK_MAX)]],
      myWeight: ['', [Validators.required]],
      myBellySize: ['', [Validators.required]],
      mood: ['', [Validators.required]],
      babyWeight: ['', [Validators.required]],
      babyHeight: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  create(): void {
    if (this.createForm.invalid) {
      return;
    }

    const diaryId = this.route.snapshot.params['id'];

    this.weeksService.create(this.createForm.value, diaryId).subscribe((_) => {
      this.router.navigate([`/diaries/see/${diaryId}`]);
    });
  }
}

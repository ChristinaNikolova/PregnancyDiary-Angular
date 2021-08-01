import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DiariesService } from 'src/app/core/services/diary/diaries.service';
import { isPositiveTestInvalid, isDueDateInvalid } from 'src/app/core/validators/dateValidator';

@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.css'],
})
export class CreateDiaryComponent implements OnInit {
  createForm: FormGroup;
  genders: string[];

  constructor(
    private fb: FormBuilder,
    private diariesService: DiariesService,
    private router: Router
  ) {
    this.genders = ['Girl', 'Boy', "I don't know yet", 'Surprice'];
  }

  get f() {
    return this.createForm.controls;
  }

  get validPositiveTest(): boolean {
    return isPositiveTestInvalid(this.createForm.value.positiveTest);
  }

  get validDueDate(): boolean {
    return isDueDateInvalid(this.createForm.value.dueDate);
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      positiveTest: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  create(): void {
    if (
      this.createForm.invalid ||
      isPositiveTestInvalid(this.createForm.value.positiveTest) ||
      isDueDateInvalid(this.createForm.value.dueDate)
    ) {
      return;
    }

    this.diariesService.create(this.createForm.value).subscribe(() => {
      this.router.navigate(['/users/diaries']);
    });
  }
}

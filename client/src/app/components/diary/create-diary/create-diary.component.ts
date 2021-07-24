import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DiariesService } from 'src/app/core/services/diary/diaries.service';

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

  ngOnInit(): void {
    this.createForm = this.fb.group({
      positiveTest: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  create(): void {
    if (
      this.createForm.invalid ||
      this.isPositiveTestInvalid() ||
      this.isDueDateInvalid()
    ) {
      return;
    }

    this.diariesService.create(this.createForm.value).subscribe(() => {
      // must be change
      this.router.navigate(['/']);
    });
  }

  isDueDateInvalid(): boolean {
    const todaysDate = new Date();
    const pickedDate = new Date(
      Date.parse(this.createForm.value.dueDate.replace(/-/g, ' '))
    );

    if (todaysDate > pickedDate) {
      return true;
    }

    return false;
  }

  isPositiveTestInvalid(): boolean {
    const todaysDate = new Date();
    const pickedDate = new Date(
      Date.parse(this.createForm.value.positiveTest.replace(/-/g, ' '))
    );

    if (todaysDate < pickedDate) {
      return true;
    }

    return false;
  }
}

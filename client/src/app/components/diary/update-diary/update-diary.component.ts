import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiariesService } from 'src/app/core/services/diary/diaries.service';

import { isPositiveTestInvalid, isDueDateInvalid } from 'src/app/core/validators/dataValidator';
import IUpdateDiary from '../../shared/models/diary/IUpdateDiary';

@Component({
  selector: 'app-update-diary',
  templateUrl: './update-diary.component.html',
  styleUrls: ['./update-diary.component.css'],
})
export class UpdateDiaryComponent implements OnInit {
  updateForm: FormGroup;
  diary: IUpdateDiary;
  genders: string[];

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private diariesService: DiariesService,
    private router: Router) {
    this.genders = ['Girl', 'Boy', "I don't know yet", 'Surprice'];
  }

  ngOnInit(): void {
    this.diary = this.route.snapshot.data['updateDiary'];

    this.updateForm = this.fb.group({
      positiveTest: [this.diary.formattedPositiveTest, [Validators.required]],
      dueDate: [this.diary.formattedDueDate, [Validators.required]],
      gender: [this.diary.genderAsString, [Validators.required]],
    });
  }

  get f() {
    return this.updateForm.controls;
  }

  get validPositiveTest():boolean{
    return isPositiveTestInvalid(this.updateForm.value.positiveTest);
  }

  get validDueDate():boolean{
    return isDueDateInvalid(this.updateForm.value.dueDate);
  }

  update(): void {
    if (
      this.updateForm.invalid ||
      isPositiveTestInvalid(this.updateForm.value.positiveTest) ||
      isDueDateInvalid(this.updateForm.value.dueDate)
    ) {
      return;
    }

    this.diariesService.update(this.updateForm.value, this.diary.id).subscribe(() => {
      // must be change console.log
      this.router.navigate(['/users/diaries']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BabiesService } from 'src/app/core/services/baby/babies.service';
import { isBabysBirthDateInvalid } from 'src/app/core/validators/dateValidator';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';

const NAME_MIN_LEN = 2;
const NAME_MAX_LEN = 50;

@Component({
  selector: 'app-create-baby',
  templateUrl: './create-baby.component.html',
  styleUrls: ['./create-baby.component.css'],
})
export class CreateBabyComponent implements OnInit {
  createForm: FormGroup;
  genders: string[];

  constructor(
    private fb: FormBuilder,
    private babiesService: BabiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.genders = ['Girl', 'Boy'];
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(NAME_MIN_LEN), Validators.maxLength(NAME_MAX_LEN)]],
      birthDate: ['', [Validators.required]],
      birthTime: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  get validBirthDate(): boolean {
    return isBabysBirthDateInvalid(this.createForm.value.birthDate);
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.createForm.value.picture);
  }

  create(): void {
    if (
      this.createForm.invalid ||
      isBabysBirthDateInvalid(this.createForm.value.birthDate) ||
      isUrlsPictureInvalid(this.createForm.value.picture)
    ) {
      return;
    }

    const diaryId = this.route.snapshot.params['id'];

    this.babiesService.create(this.createForm.value, diaryId).subscribe(() => {
      this.router.navigate([`/diaries/see/${diaryId}`]);
    });
  }
}

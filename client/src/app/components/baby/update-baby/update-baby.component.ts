import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BabiesService } from 'src/app/core/services/baby/babies.service';
import { isBabysBirthDateInvalid } from 'src/app/core/validators/dateValidator';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';
import IBabyDetails from '../../shared/models/baby/IBabyDetails';

const NAME_MIN_LEN = 2;
const NAME_MAX_LEN = 50;

@Component({
  selector: 'app-update-baby',
  templateUrl: './update-baby.component.html',
  styleUrls: ['./update-baby.component.css'],
})
export class UpdateBabyComponent implements OnInit {
  updateForm: FormGroup;
  baby: IBabyDetails;
  genders: string[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private babiesService: BabiesService,
    private router: Router
  ) {
    this.genders = ['Girl', 'Boy'];
  }

  get f() {
    return this.updateForm.controls;
  }

  get validBirthDate(): boolean {
    return isBabysBirthDateInvalid(this.updateForm.value.birthDate);
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.updateForm.value.picture);
  }

  ngOnInit(): void {
    this.baby = this.route.snapshot.data['updateBaby'];

    this.updateForm = this.fb.group({
      name: [this.baby.name, [Validators.required, Validators.minLength(NAME_MIN_LEN), Validators.maxLength(NAME_MAX_LEN)]],
      birthDate: [this.baby.formattedBirthDate, [Validators.required]],
      birthTime: [this.baby.birthTime, [Validators.required]],
      gender: [this.baby.gender, [Validators.required]],
      height: [this.baby.height, [Validators.required]],
      weight: [this.baby.weight, [Validators.required]],
      picture: [this.baby.picture, [Validators.required]],
    });
  }

  update(): void {
    if (
      this.updateForm.invalid ||
      isBabysBirthDateInvalid(this.updateForm.value.birthDate) ||
      isUrlsPictureInvalid(this.updateForm.value.picture)
    ) {
      return;
    }

    const babyId = this.baby.id;
    const diaryId = this.baby.diaryId;

    this.babiesService
      .update(this.updateForm.value, diaryId, babyId)
      .subscribe(() => {
        this.router.navigate([`/diaries/see/${diaryId}`]);
      });
  }
}

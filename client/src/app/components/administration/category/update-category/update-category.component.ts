import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import { CategoriesService } from 'src/app/core/services/category/categories.service';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';

const NAME_MIN_LEN = 3;
const NAME_MAX_LEN = 50;

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  category: IAdminCategory;
  updateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  get f() {
    return this.updateForm.controls;
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.updateForm.value.picture);
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.data['updateCategory'];

    this.updateForm = this.fb.group({
      name: [this.category.name, [Validators.required, Validators.minLength(NAME_MIN_LEN), Validators.maxLength(NAME_MAX_LEN)]],
      picture: [this.category.picture, [Validators.required]],
    });
  }

  update(): void {
    if (
      this.updateForm.invalid ||
      isUrlsPictureInvalid(this.updateForm.value.picture)
    ) {
      return;
    }

    this.categoriesService
      .update(this.updateForm.value, this.category.id)
      .subscribe((_) => {
        this.router.navigate(['/administration/categories']);
      });
  }
}

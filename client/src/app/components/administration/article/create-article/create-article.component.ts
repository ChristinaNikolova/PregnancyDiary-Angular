import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import IBaseCategory from 'src/app/components/shared/models/category/IBaseCategory';
import { ArticlesService } from 'src/app/core/services/article/articles.service';
import { CategoriesService } from 'src/app/core/services/category/categories.service';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';

const TITLE_MIN_LEN = 5;
const TITLE_MAX_LEN = 100;
const CONTENT_MIN_LEN = 10;
const CONTENT_MAX_LEN = 6000;

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  createForm: FormGroup;
  categories$: Observable<IBaseCategory[]>;

  constructor(
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getAllNames();
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(TITLE_MIN_LEN), Validators.maxLength(TITLE_MAX_LEN)]],
      content: ['', [Validators.required, Validators.minLength(CONTENT_MIN_LEN), Validators.maxLength(CONTENT_MAX_LEN)]],
      categoryName: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.createForm.value.picture);
  }

  create(): void {
    if (this.createForm.invalid ||
      isUrlsPictureInvalid(this.createForm.value.picture)) {
      return;
    }

    this.articlesService.create(this.createForm.value).subscribe((_) => {
      this.router.navigate(['/administration/articles']);
    });
  }
}

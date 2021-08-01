import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateArticle from 'src/app/components/shared/models/article/IUpdateArticle';
import IBaseCategory from 'src/app/components/shared/models/category/IBaseCategory';
import { ArticlesService } from 'src/app/core/services/article/articles.service';
import { CategoriesService } from 'src/app/core/services/category/categories.service';
import { isUrlsPictureInvalid } from 'src/app/core/validators/imageValidator';

const TITLE_MIN_LEN = 5;
const TITLE_MAX_LEN = 100;
const CONTENT_MIN_LEN = 10;
const CONTENT_MAX_LEN = 6000;

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
})
export class UpdateArticleComponent implements OnInit {
  updateForm: FormGroup;
  article: IUpdateArticle;
  categories$: Observable<IBaseCategory[]>;

  constructor(
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get f() {
    return this.updateForm.controls;
  }

  get validPictureUrl(): boolean {
    return isUrlsPictureInvalid(this.updateForm.value.picture);
  }

  ngOnInit(): void {
    this.article = this.route.snapshot.data['updateArticle'];
    this.categories$ = this.categoriesService.getAllNames();

    this.updateForm = this.fb.group({
      title: [this.article.title, [Validators.required, Validators.minLength(TITLE_MIN_LEN), Validators.maxLength(TITLE_MAX_LEN)]],
      content: [this.article.content, [Validators.required, Validators.minLength(CONTENT_MIN_LEN), Validators.maxLength(CONTENT_MAX_LEN)]],
      categoryName: [this.article.categoryName, [Validators.required]],
      picture: [this.article.picture, [Validators.required]],
    });
  }

  update(): void {
    if (
      this.updateForm.invalid ||
      isUrlsPictureInvalid(this.updateForm.value.picture)
    ) {
      return;
    }

    this.articlesService
      .update(this.updateForm.value, this.article.id)
      .subscribe((_) => {
        this.router.navigate(['/administration/articles']);
      });
  }
}

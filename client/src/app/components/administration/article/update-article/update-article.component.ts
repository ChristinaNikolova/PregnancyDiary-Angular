import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateArticle from 'src/app/components/shared/models/article/IUpdateArticle';
import IBaseCategory from 'src/app/components/shared/models/category/IBaseCategory';
import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.article = this.route.snapshot.data['updateArticle'];
    this.categories$ = this.categoriesService.getAllNames();
    this.updateForm = this.fb.group({
      title: [this.article.title, []],
      content: [this.article.content, []],
      picture: [this.article.picture, []],
    });
  }

  public get f() {
    return this.updateForm.controls;
  }

  update(): void {
    console.log('in update');
  }
}

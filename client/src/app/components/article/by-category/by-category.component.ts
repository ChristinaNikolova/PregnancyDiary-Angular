import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import IArticle from '../../shared/models/article/IArticle';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.css'],
})
export class ByCategoryComponent implements OnInit {
  articles$: Observable<IArticle[]>;
  categoryName$: Observable<string>;

  constructor(
    private articlesService: ArticlesService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let categoryId = '';

    this.route.params.subscribe((res) => {
      categoryId = res['id'];
      this.articles$ = this.articlesService.allCurrentCategory(categoryId);
    });

    this.categoryName$ = this.categoriesService.getCategoryNameById(categoryId);
  }
}

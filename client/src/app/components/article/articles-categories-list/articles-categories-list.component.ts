import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesService } from 'src/app/core/services/category/categories.service';
import ICategory from '../../shared/models/category/ICategory';

@Component({
  selector: 'app-articles-categories-list',
  templateUrl: './articles-categories-list.component.html',
  styleUrls: ['./articles-categories-list.component.css'],
})
export class ArticlesCategoriesListComponent implements OnInit {
  categories$: Observable<ICategory[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getArticlesCountByCategories();
  }
}

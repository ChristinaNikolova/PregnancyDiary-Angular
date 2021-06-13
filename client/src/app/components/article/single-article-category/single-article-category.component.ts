import { Component, Input } from '@angular/core';

import ICategory from '../../shared/models/category/ICategory';

@Component({
  selector: 'app-single-article-category',
  templateUrl: './single-article-category.component.html',
  styleUrls: ['./single-article-category.component.css'],
})
export class SingleArticleCategoryComponent {
  @Input() category: ICategory;

  constructor() {}
}

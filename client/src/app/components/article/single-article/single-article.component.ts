import { Component, Input } from '@angular/core';

import IArticle from '../../shared/models/article/IArticle';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css'],
})
export class SingleArticleComponent {
  @Input() article: IArticle;

  constructor() {}
}

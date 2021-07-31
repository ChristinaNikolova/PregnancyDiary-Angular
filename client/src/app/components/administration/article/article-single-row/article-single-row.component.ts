import { Component, EventEmitter, Input, Output } from '@angular/core';

import IAdminArticle from 'src/app/components/shared/models/article/IAdminArticle';
import { ArticlesService } from 'src/app/core/services/article/articles.service';

@Component({
  selector: '[app-article-single-row]',
  templateUrl: './article-single-row.component.html',
  styleUrls: ['./article-single-row.component.css'],
})
export class ArticleSingleRowComponent {
  @Input() article: IAdminArticle;
  @Output() removeArticleEventEmitter = new EventEmitter();

  constructor(private articlesService: ArticlesService) {}

  remove(): void {
    this.articlesService.remove(this.article.id).subscribe((_) => {
      this.removeArticleEventEmitter.emit();
    });
  }
}

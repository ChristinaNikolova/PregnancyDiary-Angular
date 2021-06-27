import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import IFavArticle from '../../shared/models/article/IFavArticle';

@Component({
  selector: '[app-favourire-articles-row]',
  templateUrl: './favourire-articles-row.component.html',
  styleUrls: ['./favourire-articles-row.component.css'],
})
export class FavourireArticlesRowComponent {
  @Input() favArticle: IFavArticle;
  @Output() removeFromFavArticlesEventEmitter = new EventEmitter<void>();

  constructor(private articlesService: ArticlesService) {}

  remove(): void {
    this.articlesService
      .dislike(this.favArticle.articleId)
      .subscribe((_) => {
        this.removeFromFavArticlesEventEmitter.emit();
      });
  }
}

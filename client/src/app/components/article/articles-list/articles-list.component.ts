import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticlesService } from 'src/app/core/services/article/articles.service';
import IArticle from '../../shared/models/article/IArticle';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<IArticle[]>;
  isSearched: boolean;

  constructor(private articlesService: ArticlesService) {
    this.isSearched = false;
  }

  ngOnInit(): void {
    this.all();
  }

  order(criteria: string): void {
    this.articles$ = this.articlesService.order(criteria);
  }

  search(query: string): void {
    if (query === '') {
      this.isSearched = false;
      this.all();
      return;
    }

    this.isSearched = true;
    this.articles$ = this.articlesService.search(query);
  }

  private all(): void {
    this.articles$ = this.articlesService.all();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import IArticle from '../../shared/models/article/IArticle';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  public articles$: Observable<IArticle[]>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.articlesService.all();
  }
}

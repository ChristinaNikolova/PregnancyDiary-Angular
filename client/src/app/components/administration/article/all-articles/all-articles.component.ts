import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import IAdminArticle from 'src/app/components/shared/models/article/IAdminArticle';
import { ArticlesService } from 'src/app/core/services/article/articles.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css'],
})
export class AllArticlesComponent implements OnInit {
  articles$: Observable<IAdminArticle[]>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.articles$ = this.articlesService.getAllForAdministration();
  }
}

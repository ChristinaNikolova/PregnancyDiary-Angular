import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from 'src/app/core/services/article/articles.service';
import IArticleDetails from '../../shared/models/article/IArticleDetails';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  article: IArticleDetails;

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.article = this.route.snapshot.data['singleArticle'];
  }

  addToFav(): void {
    this.articleService.like(this.article.id).subscribe((_) => {
      this.articleService.getDetails(this.article.id).subscribe((data) => {
        this.article = data;
      });
    });
  }

  removeFromFav(): void {
    this.articleService.dislike(this.article.id).subscribe((_) => {
      this.articleService.getDetails(this.article.id).subscribe((data) => {
        this.article = data;
      });
    });
  }
}

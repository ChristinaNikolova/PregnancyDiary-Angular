import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import IArticle from '../../shared/models/article/IArticle';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  article: IArticle;

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("in comp 1");
    this.article = this.route.snapshot.data['singleArticle'];
    console.log("in comp 2");
  }
}

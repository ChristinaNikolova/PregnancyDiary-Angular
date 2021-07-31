import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommentsService } from 'src/app/core/services/comment/comments.service';
import IComment from '../../shared/models/comment/IComment';

@Component({
  selector: 'app-comments-current-article',
  templateUrl: './comments-current-article.component.html',
  styleUrls: ['./comments-current-article.component.css'],
})
export class CommentsCurrentArticleComponent implements OnInit {
  @Input() articleId: string;
  comments$: Observable<IComment[]>;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.comments$ = this.commentsService.getForCurrentArticle(this.articleId);
  }
}

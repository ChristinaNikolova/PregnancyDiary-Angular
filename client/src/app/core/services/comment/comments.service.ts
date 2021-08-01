import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IComment from 'src/app/components/shared/models/comment/IComment';
import { environment } from 'src/environments/environment';

const commentsBaseUrl = environment.apiBaseUrl + 'comments/';
const allUrl = 'all';
const createUrl = 'create';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getForCurrentArticle(articleId: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(commentsBaseUrl + allUrl + `/${articleId}`);
  }

  create(data: string, articleId: string) {
    const body = {
      content: data,
      articleId: articleId,
    };

    return this.http.post(commentsBaseUrl + createUrl, body);
  }
}

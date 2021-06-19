import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import IComment from 'src/app/components/shared/models/comment/IComment';

const commentsBaseUrl = environment.apiBaseUrl + 'comments/';
const allUrl = 'all';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getForCurrentArticle(articleId: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(commentsBaseUrl + allUrl + `/${articleId}`);
  }
}

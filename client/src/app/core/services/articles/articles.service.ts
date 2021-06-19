import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import IArticle from 'src/app/components/shared/models/article/IArticle';
import IArticleDetails from 'src/app/components/shared/models/article/IArticleDetails';

const articlesBaseUrl = environment.apiBaseUrl + 'articles/';
const allUrl = 'all';
const orderUrl = 'order';
const searchUrl = 'search';
const byCategoryUrl = 'byCategory';
const detailsArticleUrl = 'details';
const likeUrl = 'like';
const dislikeUrl = 'dislike';
const articlesCountUrl = 'count';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  all(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + allUrl);
  }

  order(criteria: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + orderUrl + `/${criteria}`);
  }

  search(query: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + searchUrl + `/${query}`);
  }

  allCurrentCategory(categoryId: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + byCategoryUrl + `/${categoryId}`);
  }

  getDetails(id: string): Observable<IArticleDetails> {
    return this.http.get<IArticleDetails>(articlesBaseUrl + detailsArticleUrl + `/${id}`);
  }

  like(id: string) {
    return this.http.post(articlesBaseUrl + likeUrl + `/${id}`, {});
  }

  dislike(id: string) {
    return this.http.post(articlesBaseUrl + dislikeUrl + `/${id}`, {});
  }

  getArticlesCount(): Observable<number> {
    return this.http.get<number>(articlesBaseUrl + articlesCountUrl);
  }
}

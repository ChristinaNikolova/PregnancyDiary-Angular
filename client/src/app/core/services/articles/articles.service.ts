import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import IArticle from 'src/app/components/shared/models/article/IArticle';

const articlesBaseUrl = environment.apiBaseUrl + 'articles/';
const allUrl = 'all';
const orderUrl = 'order';
const searchUrl = 'search';
const byCategoryUrl = 'byCategory';
const detailsArticleUrl = 'details';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  all(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + allUrl);
  }

  order(criteria: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(
      articlesBaseUrl + orderUrl + `/${criteria}`
    );
  }

  search(query: string): Observable<IArticle[]> {
    console.log(articlesBaseUrl + searchUrl + `/${query}`);
    return this.http.get<IArticle[]>(articlesBaseUrl + searchUrl + `/${query}`);
  }

  allCurrentCategory(categoryId: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + byCategoryUrl + `/${categoryId}`);
  }

  getDetails(id: string): Observable<IArticle> {
    console.log(articlesBaseUrl + detailsArticleUrl + `/${id}`);
    return this.http.get<IArticle>(articlesBaseUrl + detailsArticleUrl + `/${id}`);
  }
}

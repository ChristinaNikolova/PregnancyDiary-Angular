import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IArticle from 'src/app/components/shared/models/article/IArticle';
import IArticleDetails from 'src/app/components/shared/models/article/IArticleDetails';
import IAdminArticle from 'src/app/components/shared/models/article/IAdminArticle';
import IUpdateArticle from 'src/app/components/shared/models/article/IUpdateArticle';
import ICreateArticle from 'src/app/components/shared/models/article/ICreateArticle';
import { environment } from 'src/environments/environment';

const articlesBaseUrl = environment.apiBaseUrl + 'articles/';
const allUrl = 'all';
const orderUrl = 'order';
const searchUrl = 'search';
const byCategoryUrl = 'byCategory';
const detailsArticleUrl = 'details';
const likeUrl = 'like';
const dislikeUrl = 'dislike';

const articlesAdminBaseUrl = environment.apiBaseAdminUrl + 'articles/';
const allAdminArticlesUrl = 'all';
const deleteArticleUrl = 'delete';
const updateArticleUrl = 'update';
const createArticleUrl = 'create';

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

  getAllForAdministration(): Observable<IAdminArticle[]> {
    return this.http.get<IAdminArticle[]>(articlesAdminBaseUrl + allAdminArticlesUrl);
  }

  remove(id: string){
    return this.http.delete(articlesAdminBaseUrl + deleteArticleUrl + `/${id}`);
  };

  getDetailsForUpdate(id: string) : Observable<IUpdateArticle>{
    return this.http.get<IUpdateArticle>(articlesAdminBaseUrl + updateArticleUrl + `/${id}`);
  }

  update(article: IUpdateArticle, id: string) {
    article.id = id;
    return this.http.put(articlesAdminBaseUrl + updateArticleUrl, article);
  }

  create(article: ICreateArticle){
    return this.http.post(articlesAdminBaseUrl + createArticleUrl, article);
  }
}

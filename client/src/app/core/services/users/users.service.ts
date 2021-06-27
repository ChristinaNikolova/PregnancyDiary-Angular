import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IFavArticle from 'src/app/components/shared/models/article/IFavArticle';
import { environment } from 'src/environments/environment';

const usersBaseUrl = environment.apiBaseUrl + 'users/';
const userFavArticlesUrl = 'favourite';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getFavouriteArticles(): Observable<IFavArticle[]> {
    return this.http.get<IFavArticle[]>(usersBaseUrl + userFavArticlesUrl);
  }
}

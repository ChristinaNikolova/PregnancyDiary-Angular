import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IFavArticle from 'src/app/components/shared/models/article/IFavArticle';
import IDiaryRow from 'src/app/components/shared/models/diary/IDiaryRow';
import { environment } from 'src/environments/environment';

const usersBaseUrl = environment.apiBaseUrl + 'users/';
const userFavArticlesUrl = 'favourite';
const userDiariesUrl = 'diaries';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getFavouriteArticles(): Observable<IFavArticle[]> {
    return this.http.get<IFavArticle[]>(usersBaseUrl + userFavArticlesUrl);
  }

  getUserDiaries(): Observable<IDiaryRow[]> {
    return this.http.get<IDiaryRow[]>(usersBaseUrl + userDiariesUrl);
  }
}

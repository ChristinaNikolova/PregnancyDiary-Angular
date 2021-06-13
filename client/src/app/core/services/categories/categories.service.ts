import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import ICategory from 'src/app/components/shared/models/category/ICategory';
import { environment } from 'src/environments/environment';

const categoriesBaseUrl = environment.apiBaseUrl + 'categories/';
const articlesCountByCategoriesUrl = 'getArticlesCountByCategories';
const categoryNameByIdUrl = 'getNameById';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getArticlesCountByCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(
      categoriesBaseUrl + articlesCountByCategoriesUrl
    );
  }

  // resolver
  getCategoryNameById(categoryId: string): Observable<string> {
    return this.http.get<string>(categoriesBaseUrl + categoryNameByIdUrl + `/${categoryId}`);
  }
}

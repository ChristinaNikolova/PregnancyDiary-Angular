import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';

import ICategory from 'src/app/components/shared/models/category/ICategory';
import { environment } from 'src/environments/environment';

const categoriesBaseUrl = environment.apiBaseUrl + 'categories/';
const articlesCountByCategoriesUrl = 'getArticlesCountByCategories';
const categoryNameByIdUrl = 'getNameById';

const categoriesAdminBaseUrl = environment.apiBaseAdminUrl + 'categories/';
const allCategoriesUrl = 'all'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getArticlesCountByCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(categoriesBaseUrl + articlesCountByCategoriesUrl);
  }

  getCategoryNameById(categoryId: string): Observable<string> {
    return this.http.get(categoriesBaseUrl + categoryNameByIdUrl + `/${categoryId}`,
      {
        responseType: 'text',
      }
    );
  }

  getAllForAdministration():Observable<IAdminCategory[]>{
    return this.http.get<IAdminCategory[]>(categoriesAdminBaseUrl + allCategoriesUrl);
  }
}
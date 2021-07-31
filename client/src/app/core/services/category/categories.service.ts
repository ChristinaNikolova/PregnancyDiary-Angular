import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import IBaseCategory from 'src/app/components/shared/models/category/IBaseCategory';
import ICategory from 'src/app/components/shared/models/category/ICategory';
import { environment } from 'src/environments/environment';

const categoriesBaseUrl = environment.apiBaseUrl + 'categories/';
const articlesCountByCategoriesUrl = 'getArticlesCountByCategories';
const categoryNameByIdUrl = 'getNameById';

const categoriesAdminBaseUrl = environment.apiBaseAdminUrl + 'categories/';
const allCategoriesUrl = 'all';
const deleteCategoryUrl = 'delete';
const updateCategoryUrl = 'update';
const createCategoryUrl = 'create';
const allNamesUrl = 'allNames'

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

  getAllForAdministration(): Observable<IAdminCategory[]> {
    return this.http.get<IAdminCategory[]>(categoriesAdminBaseUrl + allCategoriesUrl);
  }

  remove(id: string){
    return this.http.delete(categoriesAdminBaseUrl + deleteCategoryUrl + `/${id}`);
  };

  getDetailsForUpdate(id: string) : Observable<IAdminCategory>{
    return this.http.get<IAdminCategory>(categoriesAdminBaseUrl + updateCategoryUrl + `/${id}`);
  }

  update(category: IAdminCategory, id: string) {
    category.id = id;
    return this.http.put(categoriesAdminBaseUrl + updateCategoryUrl, category);
  }

  create(category: IAdminCategory) {
    return this.http.post(categoriesAdminBaseUrl + createCategoryUrl, category);
  }

  getAllNames(): Observable<IBaseCategory[]> {
    return this.http.get<IBaseCategory[]>(categoriesBaseUrl + allNamesUrl);
  }
}

import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import IAdminCategory from 'src/app/components/shared/models/category/IAdminCategory';
import { CategoriesService } from '../services/categories/categories.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateCategoryResolver implements Resolve<IAdminCategory> {

  constructor(private categoriesService: CategoriesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAdminCategory> {
    const id: string = route.params['id'];
    return this.categoriesService.getDetailsForUpdate(id);
  }
}

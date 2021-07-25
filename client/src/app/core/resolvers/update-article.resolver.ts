import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateArticle from 'src/app/components/shared/models/article/IUpdateArticle';
import { ArticlesService } from '../services/articles/articles.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateArticleResolver implements Resolve<IUpdateArticle> {
  constructor(private articlesService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUpdateArticle> {
    const id: string = route.params['id'];
    return this.articlesService.getDetailsForUpdate(id);
  }
}

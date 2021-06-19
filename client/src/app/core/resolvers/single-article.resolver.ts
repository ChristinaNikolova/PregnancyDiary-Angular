import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IArticle from 'src/app/components/shared/models/article/IArticle';
import { ArticlesService } from '../services/articles/articles.service';

@Injectable({
  providedIn: 'root',
})
export class SingleArticleResolver implements Resolve<IArticle> {

  constructor(private articlesService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IArticle> {
    const id: string = route.params['id'];
    console.log(id);
    return this.articlesService.getDetails(id);
  }
}

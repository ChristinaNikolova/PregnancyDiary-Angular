import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IArticleDetails from 'src/app/components/shared/models/article/IArticleDetails';
import { ArticlesService } from '../services/articles/articles.service';

@Injectable({
  providedIn: 'root',
})
export class SingleArticleResolver implements Resolve<IArticleDetails> {

  constructor(private articlesService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IArticleDetails> {
    const id: string = route.params['id'];
    return this.articlesService.getDetails(id);
  }
}

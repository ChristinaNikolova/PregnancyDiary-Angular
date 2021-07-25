import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateDiary from 'src/app/components/shared/models/diary/IUpdateDiary';
import { DiariesService } from '../services/diary/diaries.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateDiaryResolver implements Resolve<IUpdateDiary> {
  constructor(private diariesService: DiariesService) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<IUpdateDiary> {
    const id: string = route.params['id'];
    return this.diariesService.getDetailsForUpdate(id);
  }
}

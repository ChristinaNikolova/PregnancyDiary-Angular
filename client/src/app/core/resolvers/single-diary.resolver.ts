import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import IDiaryDetails from 'src/app/components/shared/models/diary/IDiaryDetails';
import { DiariesService } from '../services/diary/diaries.service';

@Injectable({
  providedIn: 'root'
})
export class SingleDiaryResolver implements Resolve<IDiaryDetails> {
  constructor(private diariesService: DiariesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDiaryDetails> {
    const id: string = route.params['id'];
    
    return this.diariesService.getDetails(id);
  }
}

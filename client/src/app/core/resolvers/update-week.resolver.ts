import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateWeek from 'src/app/components/shared/models/week/IUpdateWeek';
import { WeeksService } from '../services/week/weeks.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateWeekResolver implements Resolve<IUpdateWeek> {
  constructor(private weeksService: WeeksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUpdateWeek> {
    const id: string = route.params['id'];
    return this.weeksService.getDetails(id);
  }
}

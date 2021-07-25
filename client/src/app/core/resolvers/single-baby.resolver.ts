import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import IBabyDetails from 'src/app/components/shared/models/baby/IBabyDetails';
import { BabiesService } from '../services/baby/babies.service';

@Injectable({
  providedIn: 'root'
})
export class SingleBabyResolver implements Resolve<IBabyDetails> {
  constructor(private babiesService: BabiesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBabyDetails> {
    const diaryId: string = route.params['id'];
    
    return this.babiesService.getDetails(diaryId);
  }
}

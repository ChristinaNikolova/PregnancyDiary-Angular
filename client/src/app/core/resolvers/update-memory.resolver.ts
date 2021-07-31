import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import IUpdateMemory from 'src/app/components/shared/models/memory/IUpdateMemory';
import { MemoriesService } from '../services/memory/memories.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateMemoryResolver implements Resolve<IUpdateMemory> {
  constructor(private memoriesService: MemoriesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUpdateMemory> {
    const id: string = route.params['id'];
    return this.memoriesService.getDetails(id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IMemory from 'src/app/components/shared/models/memory/IMemory';
import IMemoryDetails from 'src/app/components/shared/models/memory/IMemoryDetails';
import { environment } from 'src/environments/environment';

const memoriesBaseUrl = environment.apiBaseUrl + 'memories/';
const createUrl = 'create';
const allCurrentWeekUrl = 'all';
const deleteUrl = 'delete';

@Injectable({
  providedIn: 'root',
})
export class MemoriesService {
  constructor(private http: HttpClient) {}

  create(memory: IMemory, weekId: string) {
    memory.weekId = weekId;
    return this.http.post(memoriesBaseUrl + createUrl, memory);
  }

  allCurrentWeek(weekId: string): Observable<IMemoryDetails[]>{
    return this.http.get<IMemoryDetails[]>(memoriesBaseUrl + allCurrentWeekUrl + `/${weekId}`);
  }

  remove(id: string){
    return this.http.delete(memoriesBaseUrl + deleteUrl + `/${id}`);
  }

}

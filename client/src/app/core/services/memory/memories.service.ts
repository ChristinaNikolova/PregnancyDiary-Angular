import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IMemory from 'src/app/components/shared/models/memory/IMemory';
import IMemoryDetails from 'src/app/components/shared/models/memory/IMemoryDetails';
import IUpdateMemory from 'src/app/components/shared/models/memory/IUpdateMemory';
import { environment } from 'src/environments/environment';

const memoriesBaseUrl = environment.apiBaseUrl + 'memories/';
const createUrl = 'create';
const allCurrentWeekUrl = 'all';
const deleteUrl = 'delete';
const updateUrl = 'update';

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

  getDetails(id: string): Observable<IUpdateMemory>{
    return this.http.get<IUpdateMemory>(memoriesBaseUrl + updateUrl + `/${id}`);
  }

  update(memory: IUpdateMemory, memoryId: string, weekId: string){
    memory.id = memoryId;
    memory.weekId = weekId;
    return this.http.put(memoriesBaseUrl + updateUrl, memory);
  }
}

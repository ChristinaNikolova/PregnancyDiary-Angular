import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import IMemory from 'src/app/components/shared/models/memory/IMemory';
import { environment } from 'src/environments/environment';

const memoriesBaseUrl = environment.apiBaseUrl + 'memories/';
const createUrl = 'create';

@Injectable({
  providedIn: 'root',
})
export class MemoriesService {
  constructor(private http: HttpClient) {}

  create(memory: IMemory, weekId: string) {
    memory.weekId = weekId;
    return this.http.post(memoriesBaseUrl + createUrl, memory);
  }
}

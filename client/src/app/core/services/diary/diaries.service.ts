import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IDiary from 'src/app/components/shared/models/diary/IDiary';

import { environment } from 'src/environments/environment';

const diariesBaseUrl = environment.apiBaseUrl + 'diaries/';
const createUrl = 'create';
const deleteUrl = 'delete';

@Injectable({
  providedIn: 'root',
})
export class DiariesService {
  constructor(private http: HttpClient) {}

  create(body: IDiary) {
    return this.http.post(diariesBaseUrl + createUrl, body);
  }

  remove(id: string) {
    return this.http.delete(diariesBaseUrl + deleteUrl + `/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import IBaby from 'src/app/components/shared/models/baby/IBaby';
import { environment } from 'src/environments/environment';

const babiesBaseUrl = environment.apiBaseUrl + 'babies/';
const createUrl = 'create';

@Injectable({
  providedIn: 'root',
})
export class BabiesService {
  constructor(private http: HttpClient) {}

  create(baby: IBaby, diaryId: string) {
    baby.diaryId = diaryId;
    return this.http.post(babiesBaseUrl + createUrl, baby);
  }
}

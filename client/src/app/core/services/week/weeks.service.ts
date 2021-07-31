import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import IWeek from 'src/app/components/shared/models/week/IWeek';
import { environment } from 'src/environments/environment';

const weeksBaseUrl = environment.apiBaseUrl + 'weeks/';
const createUrl = 'create';

@Injectable({
  providedIn: 'root',
})
export class WeeksService {
  constructor(private http: HttpClient) {}

  create(week: IWeek, diaryId: string) {
    week.diaryId = diaryId;
    return this.http.post(weeksBaseUrl + createUrl, week);
  }
}

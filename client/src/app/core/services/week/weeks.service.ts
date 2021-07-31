import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IWeek from 'src/app/components/shared/models/week/IWeek';
import IWeekRow from 'src/app/components/shared/models/week/IWeekRow';
import { environment } from 'src/environments/environment';

const weeksBaseUrl = environment.apiBaseUrl + 'weeks/';
const createUrl = 'create';
const getAllCurrentDiaryUrl = 'allCurrentDiary';
const deleteUrl = 'delete';

@Injectable({
  providedIn: 'root',
})
export class WeeksService {
  constructor(private http: HttpClient) {}

  create(week: IWeek, diaryId: string) {
    week.diaryId = diaryId;
    return this.http.post(weeksBaseUrl + createUrl, week);
  }

  getAllCurrentDiary(diaryId: string): Observable<IWeekRow[]> {
    return this.http.get<IWeekRow[]>(weeksBaseUrl + getAllCurrentDiaryUrl + `/${diaryId}`);
  }

  remove(id: string){
    return this.http.delete(weeksBaseUrl + deleteUrl + `/${id}`);
  }
}

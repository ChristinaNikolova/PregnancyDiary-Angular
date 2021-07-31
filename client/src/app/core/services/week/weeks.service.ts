import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IUpdateWeek from 'src/app/components/shared/models/week/IUpdateWeek';

import IWeek from 'src/app/components/shared/models/week/IWeek';
import IWeekRow from 'src/app/components/shared/models/week/IWeekRow';
import { environment } from 'src/environments/environment';

const weeksBaseUrl = environment.apiBaseUrl + 'weeks/';
const createUrl = 'create';
const getAllCurrentDiaryUrl = 'allCurrentDiary';
const deleteUrl = 'delete';
const updateUrl = 'update';

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

  getDetails(id: string): Observable<IUpdateWeek>{
    return this.http.get<IUpdateWeek>(weeksBaseUrl + updateUrl + `/${id}`);
  }

  update(week: IUpdateWeek, id: string, diaryId: string){
    week.id = id;
    week.diaryId = diaryId;
    return this.http.put(weeksBaseUrl + updateUrl, week);
  }
}

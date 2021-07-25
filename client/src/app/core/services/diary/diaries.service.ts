import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IDiary from 'src/app/components/shared/models/diary/IDiary';
import IDiaryDetails from 'src/app/components/shared/models/diary/IDiaryDetails';
import IUpdateDiary from 'src/app/components/shared/models/diary/IUpdateDiary';
import { environment } from 'src/environments/environment';

const diariesBaseUrl = environment.apiBaseUrl + 'diaries/';
const createUrl = 'create';
const deleteUrl = 'delete';
const updateUrl = 'update';
const detailsUrl = 'details';

@Injectable({
  providedIn: 'root',
})
export class DiariesService {
  constructor(private http: HttpClient) {}

  create(diary: IDiary) {
    return this.http.post(diariesBaseUrl + createUrl, diary);
  }

  remove(id: string) {
    return this.http.delete(diariesBaseUrl + deleteUrl + `/${id}`);
  }

  getDetailsForUpdate(id: string): Observable<IUpdateDiary> {
    return this.http.get<IUpdateDiary>(diariesBaseUrl + updateUrl + `/${id}`);
  }

  update(diary: IUpdateDiary, id: string) {
    diary.id = id;
    return this.http.put(diariesBaseUrl + updateUrl, diary);
  }

  getDetails(id: string):Observable<IDiaryDetails>{
    return this.http.get<IDiaryDetails>(diariesBaseUrl + detailsUrl + `/${id}`);
  }
}

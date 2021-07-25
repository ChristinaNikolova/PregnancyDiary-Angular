import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import IBaby from 'src/app/components/shared/models/baby/IBaby';
import IBabyDetails from 'src/app/components/shared/models/baby/IBabyDetails';
import { environment } from 'src/environments/environment';

const babiesBaseUrl = environment.apiBaseUrl + 'babies/';
const createUrl = 'create';
const detailsUrl = 'details';
const deleteUrl = 'delete';
const updateUrl = 'update';

@Injectable({
  providedIn: 'root',
})
export class BabiesService {
  constructor(private http: HttpClient) {}

  create(baby: IBaby, diaryId: string) {
    baby.diaryId = diaryId;
    return this.http.post(babiesBaseUrl + createUrl, baby);
  }

  getDetails(diaryId: string): Observable<IBabyDetails> {
    return this.http.get<IBabyDetails>(babiesBaseUrl + detailsUrl + `/${diaryId}`);
  }

  remove(id: string) {
    return this.http.delete(babiesBaseUrl + deleteUrl + `/${id}`);
  }

  getDetailsForUpdate(diaryId: string): Observable<IBabyDetails> {
    return this.http.get<IBabyDetails>(babiesBaseUrl + updateUrl + `/${diaryId}`);
  }

  update(baby: IBabyDetails, diaryId: string, babyId: string) {
    baby.diaryId = diaryId;
    baby.id = babyId;
    return this.http.put(babiesBaseUrl + updateUrl, baby);
  }
}

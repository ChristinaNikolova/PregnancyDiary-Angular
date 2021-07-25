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

@Injectable({
  providedIn: 'root',
})
export class BabiesService {
  constructor(private http: HttpClient) {}

  create(baby: IBaby, diaryId: string) {
    baby.diaryId = diaryId;
    return this.http.post(babiesBaseUrl + createUrl, baby);
  }

  getDetails(diaryId: string) : Observable<IBabyDetails>{
    return this.http.get<IBabyDetails>(babiesBaseUrl + detailsUrl + `/${diaryId}`);
  }

  remove(id: string){
    return this.http.delete(babiesBaseUrl + deleteUrl + `/${id}`)
  }
}

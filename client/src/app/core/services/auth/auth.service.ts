import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import IRegister from 'src/app/components/shared/models/authentication/IRegister';
import ILogin from 'src/app/components/shared/models/authentication/ILogin';
import { environment } from 'src/environments/environment';

const loginUrl = environment.apiBaseUrl + 'account/login';
const registerUrl = environment.apiBaseUrl + 'account/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isUserAdmin: boolean;

  constructor(private http: HttpClient) {
    this.isUserAdmin = false;
  }

  register(body: IRegister) {
    return this.http.post(registerUrl, body);
  }

  login(body: ILogin) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    return localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true'
      ? !this.isUserAdmin
      : this.isUserAdmin;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'users'

  constructor(private http: HttpClient) { }

  login = (user) => {
    return this.http.post(`${environment.domain}/login`, user, { observe: 'response' });
  }

  createAccount = (user) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, user);
  }
}

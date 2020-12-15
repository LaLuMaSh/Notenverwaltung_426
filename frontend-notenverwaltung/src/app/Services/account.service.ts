import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login = (user) => {
    return this.http.post(`${environment.baseUrl}/login`, user);
  }

  createAccount = (user) => {
    return this.http.post(`${environment.baseUrl}/register`, user);
  }
}

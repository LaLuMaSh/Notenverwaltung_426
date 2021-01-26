import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Class} from '../Model/Class';
import {User} from '../Model/User';
import {Permission} from '../Model/Permission';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'users';

  constructor(private http: HttpClient) {
  }

  login = (user) => {
    return this.http.post(`${environment.domain}/login`, user, {observe: 'response'});
  };

  createAccount = (user) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, user);
  };

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.domain}/${this.baseUrl}`);
  }

  getMe(): Observable<User> {
    return this.http.get<User>(`${environment.domain}/${this.baseUrl}/me`);
  }

  isAdmin(): boolean {
    const item = localStorage.getItem('permissions');

    if (item == null) {
      return false;
    }

    let perms: Permission[];
    perms = JSON.parse(item);

    for (const perm of perms) {
      if (perm.name === 'admin') {
        return true;
      }
    }

    return false;
  }
}

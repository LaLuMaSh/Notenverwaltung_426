import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = 'subject';

  constructor(private http: HttpClient) { }

  list = () => {
    return this.http.get(`${environment.domain}/${this.baseUrl}`);
  }

  create = (subject) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, subject);
  }
}

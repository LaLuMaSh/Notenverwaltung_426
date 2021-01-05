import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  baseUrl = 'semester';

  constructor(private http: HttpClient) { }

  create = (semester) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, semester);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Semester} from '../Model/Semester';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  baseUrl = 'semester';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  create = (semester) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, semester);
  }

  public getAll(): Observable<Semester[]> {
    return this.httpClient.get<Semester[]>(`${environment.domain}/${this.baseUrl}`);
  }
}

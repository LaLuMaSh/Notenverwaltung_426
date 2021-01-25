import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Semester} from '../Model/Semester';
import {Observable} from 'rxjs';
import {GraduationGroup} from '../Model/GraduationGroup';
import {Subject} from '../Model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = 'subject';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  create = (subject) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, subject);
  }

  public getAll(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`${environment.domain}/${this.baseUrl}`);
  }
}

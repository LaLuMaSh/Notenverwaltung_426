import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Semester} from '../Model/Semester';
import {Observable} from 'rxjs';
import {GraduationGroup} from '../Model/GraduationGroup';
import {Class} from '../Model/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl = 'class';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  create = (group) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, group);
  }

  public getAll(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(`${environment.domain}/${this.baseUrl}`);
  }
}

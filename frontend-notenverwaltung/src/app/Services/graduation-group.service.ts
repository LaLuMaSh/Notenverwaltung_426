import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Semester} from '../Model/Semester';
import {Observable} from 'rxjs';
import {GraduationGroup} from '../Model/GraduationGroup';

@Injectable({
  providedIn: 'root'
})
export class GraduationGroupService {

  baseUrl = 'group';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  create = (group) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, group);
  }

  public getAll(): Observable<GraduationGroup[]> {
    return this.httpClient.get<GraduationGroup[]>(`${environment.domain}/${this.baseUrl}`);
  }
}

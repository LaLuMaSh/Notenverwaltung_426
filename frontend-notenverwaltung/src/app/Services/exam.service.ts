import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Semester} from '../Model/Semester';
import {Observable} from 'rxjs';
import {GraduationGroup} from '../Model/GraduationGroup';
import {Subject} from '../Model/Subject';
import {Exam} from '../Model/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  baseUrl = 'exam';

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  create = (exam) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}`, exam);
  }

  public getAll(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(`${environment.domain}/${this.baseUrl}`);
  }

  getMy() {
    return this.httpClient.get<Exam[]>(`${environment.domain}/${this.baseUrl}/me`);
  }

  createOwn = (exam) => {
    return this.http.post(`${environment.domain}/${this.baseUrl}/me`, exam);
  }
}

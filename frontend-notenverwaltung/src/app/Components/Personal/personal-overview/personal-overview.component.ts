import { Component, OnInit } from '@angular/core';
import {Exam} from '../../../Model/Exam';
import {ExamService} from '../../../Services/exam.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './personal-overview.component.html',
  styleUrls: ['./personal-overview.component.scss']
})
export class PersonalOverviewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

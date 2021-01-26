import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';
import {Exam} from '../../../Model/Exam';
import {ExamService} from '../../../Services/exam.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements OnInit {
  exams: Exam[];

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.getAll().subscribe(value => {
      this.exams = value;
    });
  }
}

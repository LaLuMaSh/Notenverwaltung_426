import { Component, OnInit } from '@angular/core';
import {Exam} from '../../../Model/Exam';
import {ExamService} from '../../../Services/exam.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-personal-exam.component.html',
  styleUrls: ['./list-personal-exam.component.scss']
})
export class ListPersonalExamComponent implements OnInit {
  exams: Exam[];

  constructor(private examService: ExamService) { }

  ngOnInit(): void {
    this.examService.getMy().subscribe(value => {
      this.exams = value;
    });
  }
}

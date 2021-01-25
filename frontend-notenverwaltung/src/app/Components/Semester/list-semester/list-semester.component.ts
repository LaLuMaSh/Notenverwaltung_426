import { Component, OnInit } from '@angular/core';
import {Semester} from '../../../Model/Semester';
import {SemesterService} from '../../../Services/semester.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-semester.component.html',
  styleUrls: ['./list-semester.component.scss']
})
export class ListSemesterComponent implements OnInit {
  semesters: Semester[];

  constructor(private semesterService: SemesterService) { }

  ngOnInit(): void {
    this.semesterService.getAll().subscribe(value => {
      this.semesters = value;
    });
  }

}

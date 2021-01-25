import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {
  subjects: Subject[];

  constructor(private service: SubjectService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => {
      this.subjects = value;
    });
  }

}

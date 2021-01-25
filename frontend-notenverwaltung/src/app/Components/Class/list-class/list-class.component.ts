import { Component, OnInit } from '@angular/core';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';
import {Class} from '../../../Model/Class';
import {ClassService} from '../../../Services/class.service';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit {
  classes: Class[];

  constructor(private service: ClassService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => {
      this.classes = value;
    });
  }

}

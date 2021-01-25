import { Component, OnInit } from '@angular/core';
import {Semester} from '../../../Model/Semester';
import {SemesterService} from '../../../Services/semester.service';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {GraduationGroup} from '../../../Model/GraduationGroup';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-graduation-group.component.html',
  styleUrls: ['./list-graduation-group.component.scss']
})
export class ListGraduationGroupComponent implements OnInit {
  groups: GraduationGroup[];

  constructor(private service: GraduationGroupService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => {
      this.groups = value;
    });
  }

}

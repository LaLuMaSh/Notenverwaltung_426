import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../Services/subject.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {

  constructor(
    private service: SubjectService
  ) { }

  ngOnInit(): void {
  }

  submit = () => {

  }
}

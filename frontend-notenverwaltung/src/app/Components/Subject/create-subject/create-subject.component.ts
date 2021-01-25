import {Component} from '@angular/core';
import {GraduationGroup} from '../../../Model/GraduationGroup';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {Router} from '@angular/router';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent {

  groups: GraduationGroup[];
  formData: Subject;

  group: GraduationGroup;

  constructor(private service: SubjectService, private groupService: GraduationGroupService, private router: Router) {
    this.formData = new Subject();
    this.groupService.getAll().subscribe(value => {
      this.groups = value;
    });
  }

  submit = () => {
    if (this.group == null) {
      return;
    }
    this.formData.group = this.group;

    this.service.create(this.formData).subscribe(value => {
      this.router.navigateByUrl('/subject');
    });
  }
}

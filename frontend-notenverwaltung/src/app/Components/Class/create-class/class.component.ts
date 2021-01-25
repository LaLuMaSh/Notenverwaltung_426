import {Component} from '@angular/core';
import {GraduationGroup} from '../../../Model/GraduationGroup';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {Router} from '@angular/router';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';
import {Class} from '../../../Model/Class';
import {ClassService} from '../../../Services/class.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {

  formData: Class;

  constructor( private classService: ClassService, private router: Router) {
    this.formData = new Class();
  }

  submit = () => {
    this.classService.create(this.formData).subscribe();
    this.router.navigateByUrl('/class');
  }
}

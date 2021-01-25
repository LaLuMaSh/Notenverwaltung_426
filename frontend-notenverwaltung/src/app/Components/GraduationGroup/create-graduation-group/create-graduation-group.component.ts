import {Component} from '@angular/core';
import {GraduationGroup} from '../../../Model/GraduationGroup';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-graduation-group.component.html',
  styleUrls: ['./create-graduation-group.component.scss']
})
export class CreateGraduationGroupComponent {

  groups: GraduationGroup[];
  formData: GraduationGroup;

  parent: GraduationGroup;

  constructor(private service: GraduationGroupService, private router: Router) {
    this.formData = new GraduationGroup();
    this.parent = null;
    this.service.getAll().subscribe(value => {
      this.groups = value;
    });
  }

  submit = () => {
    if (this.parent != null) {
      this.formData.parentGraduationGroup = this.parent;
    }

    this.service.create(this.formData).subscribe(value => {
      this.router.navigateByUrl('/group');
    });
  }
}

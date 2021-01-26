import { Component } from '@angular/core';
import { SemesterService } from '../../../Services/semester.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.scss']
})
export class CreateSemesterComponent {

  formData = {
    name: '',
  };

  constructor(private router: Router, private service: SemesterService) { }

  submit = () => {
    this.service.create(this.formData).subscribe(value => {
      this.router.navigateByUrl('/semester');
    });
  }
}

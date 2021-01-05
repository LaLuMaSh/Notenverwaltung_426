import { Component } from '@angular/core';
import { SemesterService } from '../../../Services/semester.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.scss']
})
export class CreateSemesterComponent {

  formData = {
    name: '',
  };

  constructor(private service: SemesterService) { }

  submit = () => {
    this.service.create(this.formData).subscribe();
  }
}

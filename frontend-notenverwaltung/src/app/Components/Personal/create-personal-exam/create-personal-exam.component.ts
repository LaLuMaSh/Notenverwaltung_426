import {Component} from '@angular/core';
import {GraduationGroup} from '../../../Model/GraduationGroup';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {Router} from '@angular/router';
import {Subject} from '../../../Model/Subject';
import {SubjectService} from '../../../Services/subject.service';
import {User} from '../../../Model/User';
import {AccountService} from '../../../Services/account.service';
import {Exam} from '../../../Model/Exam';
import {ExamService} from '../../../Services/exam.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-personal-exam.component.html',
  styleUrls: ['./create-personal-exam.component.scss']
})
export class CreatePersonalExamComponent {

  subjects: Subject[];
  formData: Exam;

  constructor(
    private subjectService: SubjectService,
    private authService: AccountService,
    private service: ExamService, private router: Router
  ) {
    this.formData = new Exam();
    this.subjectService.getAll().subscribe(value => {
      this.subjects = value;
    });
  }

  submit = () => {
    if (this.formData.subject == null) {
      return;
    }
    this.authService.getMe().subscribe(usr => {
      this.formData.user = usr;
      this.service.create(this.formData).subscribe(value => {
        this.router.navigateByUrl('/personal');
      });
    });
  }
}

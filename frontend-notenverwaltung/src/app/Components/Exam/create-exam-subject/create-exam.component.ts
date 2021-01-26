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
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent {

  users: User[];
  subjects: Subject[];
  formData: Exam;

  constructor(
    private accountService: AccountService,
    private subjectService: SubjectService,
    private service: ExamService, private router: Router
  ) {
    this.formData = new Exam();
    this.accountService.getAll().subscribe(value => {
      this.users = value;
    });
    this.subjectService.getAll().subscribe(value => {
      this.subjects = value;
    });
  }

  submit = () => {
    if (this.formData.subject == null || this.formData.user == null) {
      console.log('dsasfdfdsasd');
      return;
    }
    this.service.create(this.formData).subscribe(value => {
      this.router.navigateByUrl('/exam');
    });
  };
}

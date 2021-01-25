import {Component, OnInit} from '@angular/core';
import {GraduationGroup} from '../../../Model/GraduationGroup';
import {GraduationGroupService} from '../../../Services/graduation-group.service';
import {Router} from '@angular/router';
import {Class} from '../../../Model/Class';
import {User} from '../../../Model/User';
import {ClassService} from '../../../Services/class.service';
import {AccountService} from '../../../Services/account.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  classes: Class[];
  users: User[];

  clazz: Class;
  user: User;

  ngOnInit(): void {
    this.classService.getAll().subscribe(value => {
      this.classes = value;
    });
    this.accountService.getAll().subscribe(value => {
      this.users = value;
    });
  }

  constructor(private classService: ClassService, private accountService: AccountService, private router: Router) {
    this.clazz = null;
    this.user = null;
  }

  submit = () => {
    if (this.clazz == null || this.user == null) {
      return;
    }

    this.clazz.users.push(this.user);

    this.classService.update(this.clazz).subscribe(value => {
      this.router.navigateByUrl('/class');
    });
  }
}

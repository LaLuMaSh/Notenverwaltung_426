import { Component } from '@angular/core';
import { AccountService } from '../../../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  }

  constructor(
    private service: AccountService,
    private router: Router,
  ) {}

  login = () => {
    this.service.login(this.formData).subscribe(r => {
      localStorage.setItem('token', r.headers.get('Authorization'));
      this.router.navigate(['home']);
    });
  }
}

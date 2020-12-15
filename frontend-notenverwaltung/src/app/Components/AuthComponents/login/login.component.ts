import { Component } from '@angular/core';
import { AccountService } from '../../../Services/account.service';

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
  ) {}

  login = () => {
    this.service.login(this.formData).subscribe();
  }
}

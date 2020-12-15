import { AccountService } from '../../../Services/account.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formData = {
    username: '',
    password: ''
  }

  constructor(
    private service: AccountService,
    private router: Router
  ) {}

  createAccount = () => {
    this.service.createAccount(this.formData).subscribe(() => this.router.navigate(['login']));
  }
}

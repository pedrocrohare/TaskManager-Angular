import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  emailControlLogin = new FormControl('');
  email: String = "";

  passwordControlLogin = new FormControl('');
  password: String = "";

  constructor(private authService: AuthService, private router: Router) { }

login(event: Event) {
  event.preventDefault();

  const email = this.emailControlLogin.value?.trim() || '';
  const password = this.passwordControlLogin.value?.trim() || '';

  this.authService.login(email, password);
}
}

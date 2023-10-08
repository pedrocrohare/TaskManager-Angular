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


  emailControl = new FormControl('');
  email: String = "";

  passwordControl = new FormControl('');
  password: String = "";

  constructor(private authService: AuthService, private router: Router) {
    this.emailControl.valueChanges.subscribe(value => {

      if (value === null) {
        alert("El valor es nulo")
      } else {
        this.email = value;
      }
    });

    this.passwordControl.valueChanges.subscribe(value => {
      if (value === null) {
        alert("El valor es nulo")
      } else {
        this.password = value;
      }
    });



 }  // Inject AuthService

login(event: Event) {
    event.preventDefault();

    const email = this.email.trim();
    const password = this.password.trim();

    console.log(this.authService)



    this.authService.loginWith(email, password);
  }
}

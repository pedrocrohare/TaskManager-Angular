import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  emailControl = new FormControl('');
  email: String = "";

  passwordControl = new FormControl('');
  password: String = "";

  constructor(private authService: AuthService, private router: Router) { }

  register(event: Event) {
    event.preventDefault();

    const email = this.email.trim();
    const password = this.password.trim();
    console.log(this.authService);

    this.authService.register(email, password);
  }
}

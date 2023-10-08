import { Injectable } from '@angular/core';
import { Auth, provideAuth, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("REGISTRAR BIEN")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("REGISTRAR ERRORRRR")
        console.log(errorCode, errorMessage);
      });
  }

  registerWith(email: string, password: string) {

    this.register(email, password).then(() => {
        console.log("Register ok");
      })
  } 

  loginWith(email: string, password: string) {

    this.login(email, password).then(() => {
        console.log("Register ok");
      })
  } 

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        console.log("LOGIN BIEEEN")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

console.log("LOGIN ERRORRRR")

      });
  }
}

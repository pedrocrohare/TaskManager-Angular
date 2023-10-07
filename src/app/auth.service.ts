import { Injectable } from '@angular/core';
import { provideAuth, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
  useFactory: () => provideAuth(() => getAuth()),
})
export class AuthService {

  auth = getAuth();

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in');
      } else {
        console.log('User is not signed in');
      }
    });
  }

  register(email: string, password: string): Promise<void> {
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

  login(email: string, password: string): Promise<void> {
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

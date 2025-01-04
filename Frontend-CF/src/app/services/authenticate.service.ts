import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { environment } from '../environments/enviroment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);

  constructor(private router: Router) {

  }

  async register(email: string, password: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          sendEmailVerification(result.user)
        });
    } catch (error) {
      return error;
    }
  }


}

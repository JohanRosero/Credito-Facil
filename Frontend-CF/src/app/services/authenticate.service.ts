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

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);
  public loginResponse?: any;


  constructor() {
  }

  async register(email: string, password: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          sendEmailVerification(result.user)
          console.log(JSON.stringify(result.user));// review
        });
    } catch (error) {
      return error;
    }
  }

  async signIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  async signOut() {
    return signOut(this.auth);
  }

  async resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

}

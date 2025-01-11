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

  async register(email: string, password: string) : Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
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

  sendEmailVerification() {
    if (this.auth.currentUser) {
      return sendEmailVerification(this.auth.currentUser);
    } else {
      throw new Error('No user is currently signed in.');
    }
  }

}

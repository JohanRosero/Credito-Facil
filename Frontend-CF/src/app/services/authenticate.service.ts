import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged
} from 'firebase/auth';
import { environment } from '../environments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private app = initializeApp(environment.firebase);
  private auth = getAuth(this.app);

  user: any;

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      // Puedes emitir un evento o actualizar un observable aquí para notificar a otros componentes sobre el cambio de estado
    });
  }

  async register(email: string, password: string): Promise<any> {
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

  isLoggedIn() {
    return this.user;
  }


}
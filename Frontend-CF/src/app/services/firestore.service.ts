import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { environment } from '../environments/enviroment';
import { User } from '../interfaces/interfacesMyDb';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // Initialize Firebase
  private app = initializeApp(environment.firebase);
  // Initialize Cloud Firestore and get a reference to the service
  private db = getFirestore(this.app);

  constructor() { }

  addUser(user:User){
    const userRef = collection(this.db, "users");
    return addDoc(userRef, user);
  }

}

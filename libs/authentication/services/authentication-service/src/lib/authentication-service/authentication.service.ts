import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  auth = getAuth();
  user = this.auth.currentUser;

  async getCurrentUser() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        return user;
      }

      return undefined;
    });
  }

  async signUp(email: string, password: string): Promise<User | undefined> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        console.log('error: ', error);
        return undefined;
      });
  }

  async signOut(): Promise<void> {
    await this.auth.signOut();
  }
}

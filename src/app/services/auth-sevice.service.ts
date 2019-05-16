import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthSeviceService {
  constructor(
    private AFAuth: AngularFireAuth, 
    private router: Router) {}

  login(email: string, password: string) {
    return this.AFAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    let provider = new auth.GoogleAuthProvider();
    provider.addScope('email');
    return this.AFAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.AFAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  getEmail() {
    return this.AFAuth.auth.currentUser.email;
  }

  register(displayname: string, email: string, password: string) {
    return this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: displayname});
    });
  }
}

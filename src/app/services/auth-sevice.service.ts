import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthSeviceService {
  constructor(private AFAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    return this.AFAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.AFAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  register(displayname: string, email: string, password: string) {
    return this.AFAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: displayname});
    });
  }
}

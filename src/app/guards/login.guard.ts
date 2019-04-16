import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private AFAuth: AngularFireAuth, private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean
  {

    return this.AFAuth.authState.pipe(map(auth => {
      if( isNullOrUndefined(auth)) {
        
        return true;
      }
      else {
        this.router.navigate(['/home']);
        return false;
      }
    }))

  }

}
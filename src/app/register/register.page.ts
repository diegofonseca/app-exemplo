import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  displayname: string;
  email: string;
  password: string;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.displayname, this.email, this.password).then(res=> {
      this.router.navigate(['/login']);
    });
  }

}

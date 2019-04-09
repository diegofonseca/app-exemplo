import { Component } from '@angular/core';
import { AuthSeviceService } from '../services/auth-sevice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService:AuthSeviceService) {}

  logout() {
    this.authService.logout();
  }

}

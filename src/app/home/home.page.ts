import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from '../services/auth-sevice.service';
import { ContactI } from '../model/contact.interface';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  contacts: ContactI[];  

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res
    })
  }

  constructor(private contactService:ContactsService, private authService:AuthSeviceService) {}

  logout() {
    this.authService.logout();
  }

}

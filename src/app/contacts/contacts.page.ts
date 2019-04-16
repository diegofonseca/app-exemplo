import { Component, OnInit } from '@angular/core';
import { ContactI } from '../model/contact.interface';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contact: ContactI = {
    nome: '',
    telefone: ''
  }
  contactId = null;

  constructor(
    private route: ActivatedRoute,
    private contactService:ContactsService, 
    private router: Router) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.params['id'];
    if (this.contactId) {
      this.contactService.getContact(this.contactId).subscribe(res => {
        this.contact = res;
      })
    }
  }

  add() {
    if(this.contactId) {      
      this.contactService.update(this.contact, this.contactId);      
    }
    else {
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/home']);
  }

  remove() {
    this.router.navigate(['/home']);
    this.contactService.remove(this.contactId);
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactI } from './../model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsCollection: AngularFirestoreCollection<ContactI>;
  private contacts: Observable<ContactI[]>;

  constructor(private db:AngularFirestore) { 
    this.contactsCollection = db.collection<ContactI>('contacts');
    this.contacts = this.contactsCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ))
  }

  getContacts() {
    return this.contacts;
  }

  getContact(id:string) {
    return this.contactsCollection.doc<ContactI>(id).valueChanges();
  }

  update(contact:ContactI, id:string) {
    return this.contactsCollection.doc(id).update(contact);
  }

  remove(id:string) {
    return this.contactsCollection.doc(id).delete();
  }

  addContact(contact:ContactI) {    
    return this.contactsCollection.add(contact);
  }
}

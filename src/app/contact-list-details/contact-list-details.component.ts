import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list-details',
  templateUrl: './contact-list-details.component.html',
  styleUrls: ['./contact-list-details.component.scss']
})
export class ContactListDetailsComponent implements OnInit {
  
  constructor() {
    
   
   }

  @Output() editContact = new EventEmitter();

  @Output() deleteContact = new EventEmitter();


  // const contactList = [
  //   {id: 1, name:'Superman'},
  //   {id: 2, name:'Batman'},
  //   {id: 5, name:'BatGirl'},
  //   {id: 3, name:'Robin'},
  //   {id: 4, name:'Flash'}
  // ];

  ngOnInit(): void {

  }
  @Input() contactsList:any;
  editContactFn(personIndex:any){
    this.editContact.emit(personIndex);
  }

  deleteContactFn(personIndex:any){
    this.deleteContact.emit(personIndex);
  }

}

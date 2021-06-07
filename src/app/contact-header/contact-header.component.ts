import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }
  // showAddContact: boolean = false;
  @Output() showAddContact = new EventEmitter();


  toggleAddContact(){
    // showAddContact = true;
    this.showAddContact.emit(true);
  }


  

}

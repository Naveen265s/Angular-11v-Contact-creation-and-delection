import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  firstName: string ='';
  lastName: string = '';
  company: string='';
  email:string='';
  primaryMobile='';
  alternateMobile='';

  @Output() hideAddContactForm = new EventEmitter();
  @Output() saveContactDtls = new EventEmitter();
  @Input() personContact :any;
  showAlternateMobile : boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.firstName = this.personContact.firstName;
    this.lastName = this.personContact.lastName;
    this.company = this.personContact.company;
    this.email = this.personContact.email;
    this.primaryMobile = this.personContact.primaryMobile;
    this.alternateMobile = this.personContact.alternateMobile;


    
  }
  hideContactForm(){
    this.hideAddContactForm.emit(false);
  }
  saveContactDetails(){
    console.log(this.personContact);
    if(this.firstName){
      this.personContact.firstName = this.firstName;
      this.personContact.lastName = this.lastName;
      this.personContact.company = this.company;
      this.personContact.email = this.email;
      this.personContact.primaryMobile = this.primaryMobile;
      this.personContact.alternateMobile = this.alternateMobile;
      this.saveContactDtls.emit(this.personContact);
    }
  }

  toggleMoreDetails(){
    this.showAlternateMobile = !this.showAlternateMobile;
  }
}

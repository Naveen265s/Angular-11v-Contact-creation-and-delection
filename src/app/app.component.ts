import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-Details';
  contact_form_show: boolean = false;
  edit_contact_form:boolean = false;
  personId : any;
  dialogboxShow:boolean = false;
  contactToBeDel:number = 0;
  searchValue : string ='';

  // conatctFormShow(){
  //     this.contact_form_show = true;
  // }

  // contactList1 = ['Kumari A', 'contactsList', 'Alex John', 'Robin'];
  contactList = [{ id: 1, firstName: 'Anand', lastName: 'Kumar', company: 'Infosys',
   email: 'anand@gmail.com',primaryMobile:'90000121212', alternateMobile:''},
   { id: 1, firstName: 'Vamsi', lastName: 'Kumar', company: 'Infosys',
   email: 'anand@gmail.com',primaryMobile:'90000121212', alternateMobile:''},
   { id: 1, firstName: 'Nani', lastName: 'Kumar', company: 'Infosys',
   email: 'anand@gmail.com',primaryMobile:'90000121212', alternateMobile:''}];
   contactListCopy = this.contactList;



   personEmptyContact = { id: '', firstName: '', lastName: '', company: '',
   email: '',primaryMobile:'', alternateMobile:''};

   hideContactFormFn(){
    this.personEmptyContact = { id: '', firstName: '', lastName: '', company: '',
    email: '',primaryMobile:'', alternateMobile:''};
    this.contact_form_show=false;
   }

   
   
   savePersonContact(contact:any){
     this.contactList.push(contact);
     this.contactListCopy = this.contactList;
     this.personEmptyContact = { id: '', firstName: '', lastName: '', company: '',
    email: '',primaryMobile:'', alternateMobile:''};
     this.contact_form_show = false;
   }

   editPersonContact(personIndex:any){
     this.edit_contact_form = true;
     this.personId = Number(personIndex);
   }

   editPersonDetails(personDetails:any){
     this.contactList[this.personId]=personDetails;
     this.contactListCopy= this.contactList;
     this.edit_contact_form = false;
   }

   hideAddContactFn(){
    this.edit_contact_form=false;
   }

   showDialogBox(index:any){
    //  this.contactList.splice(index, 1);
    this.dialogboxShow = true;
    this.contactToBeDel = index;
   }
   delContactItem(){
    this.dialogboxShow = false;
     this.contactList.splice(this.contactToBeDel, 1);
     this.contactListCopy=this.contactList;
   }
   searchByNameFn(){
  let term = this.searchValue;
  // let contactListDup = this.contactList;
  this.contactList = this.contactList.filter(function(tag:any) {
    return tag.firstName.toLowerCase().indexOf(term) >= 0;
});
   }

}

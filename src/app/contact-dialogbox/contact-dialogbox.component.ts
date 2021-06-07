import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-dialogbox',
  templateUrl: './contact-dialogbox.component.html',
  styleUrls: ['./contact-dialogbox.component.scss']
})
export class ContactDialogboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() isCancelClicked = new EventEmitter();
  @Output() isDelClicked = new EventEmitter();


  closeDialog(){
    this.isCancelClicked.emit();
  }

  closeDialogAndDel(){
    this.isDelClicked.emit();
  }


}

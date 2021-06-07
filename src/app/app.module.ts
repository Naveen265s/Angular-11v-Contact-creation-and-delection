import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListDetailsComponent } from './contact-list-details/contact-list-details.component';
import { ContactDialogboxComponent } from './contact-dialogbox/contact-dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ContactListDetailsComponent,
    ContactDialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

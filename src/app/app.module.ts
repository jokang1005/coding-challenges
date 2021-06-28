
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared';
import { ReactiveFormsModule } from '@angular/forms'
import { ContactModule } from './contact/contact.module';
import { ApicallService } from './apicall.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ContactModule,
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }

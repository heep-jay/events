import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './Component/create-event/create-event.component';
import { CreateTicketsComponent } from './Component/create-tickets/create-tickets.component';
import { AddTicketsComponent } from './Component/add-tickets/add-tickets.component';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReviewComponent } from './Component/review/review.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    CreateTicketsComponent,
    AddTicketsComponent,
    HeaderComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

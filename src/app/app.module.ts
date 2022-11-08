import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './Component/create-event/create-event.component';
import { CreateTicketsComponent } from './Component/create-tickets/create-tickets.component';
import { AddTicketsComponent } from './Component/add-tickets/add-tickets.component';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReviewComponent } from './Component/review/review.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PlanComponent } from './Component/plan/plan.component';
import { PublishedComponent } from './Component/published/published.component';
import { FoodvendorComponent } from './Component/foodvendor/foodvendor.component';
import { FoodDetailsComponent } from './Component/food-details/food-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorComponent } from './Component/vendor/vendor.component';
import { TestComponent } from './Component/test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    CreateTicketsComponent,
    AddTicketsComponent,
    HeaderComponent,
    ReviewComponent,
    DashboardComponent,
    PlanComponent,
    PublishedComponent,
    FoodvendorComponent,
    FoodDetailsComponent,
    VendorComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

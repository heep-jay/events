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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';





import { ReviewComponent } from './Component/review/review.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PlanComponent } from './Component/plan/plan.component';
import { PublishedComponent } from './Component/published/published.component';
import { FoodvendorComponent } from './Component/foodvendor/foodvendor.component';
import { FoodDetailsComponent } from './Component/food-details/food-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorComponent } from './Component/vendor/vendor.component';
import { TestComponent } from './Component/test/test.component';
import { SolutionsComponent } from './Component/solutions/solutions.component';
import { SecurityComponent } from './Component/security/security.component';
import { ModalFormComponent } from './Component/modal-form/modal-form.component';
import { RequestComponent } from './Component/request/request.component';
import { TableComponent } from './Component/table/table.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { IprComponent } from './Component/ipr/ipr.component';
import { DaterangeComponent } from './Component/daterange/daterange.component';
import { RarComponent } from './Component/rar/rar.component';
import { SubscriptionComponent } from './Component/subscription/subscription.component';
import { FoodDeetComponent } from './Component/food-deet/food-deet.component';
import { EventplanComponent } from './Component/eventplan/eventplan.component';
import { WalletComponent } from './Component/wallet/wallet.component';

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
    SolutionsComponent,
    SecurityComponent,
    ModalFormComponent,
    RequestComponent,
    TableComponent,
    CategoriesComponent,
    CarouselComponent,
    IprComponent,
    DaterangeComponent,
    RarComponent,
    SubscriptionComponent,
    FoodDeetComponent,
    EventplanComponent,
    WalletComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonToggleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

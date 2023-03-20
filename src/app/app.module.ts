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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { ReviewComponent } from './Component/review/review.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PlanComponent } from './Component/plan/plan.component';
import { PublishedComponent } from './Component/published/published.component';
import { FoodvendorComponent } from './Component/foodvendor/foodvendor.component';
import { FoodDetailsComponent } from './Component/food-details/food-details.component';
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
import { PasscodeComponent } from './Component/passcode/passcode.component';
import { WarningComponent } from './Component/warning/warning.component';
import { InfoComponent } from './Component/info/info.component';
import { TrpasscodeComponent } from './Component/trpasscode/trpasscode.component';
import { WpasscodeComponent } from './Component/wpasscode/wpasscode.component';
import { UpdatePinComponent } from './Component/update-pin/update-pin.component';
import { MusicvendorComponent } from './Component/musicvendor/musicvendor.component';
import { InvoiceComponent } from './Component/invoice/invoice.component';
import { PlaneventComponent } from './Component/planevent/planevent.component';
import { PlanbudgetComponent } from './Component/planbudget/planbudget.component';
import { AddNewTicketsComponent } from './Component/add-new-tickets/add-new-tickets.component';
import { DatepickersComponent } from './Component/datepickers/datepickers.component';
import { CreatenewticketsComponent } from './Component/createnewtickets/createnewtickets.component';
import { ReviewnewComponent } from './Component/reviewnew/reviewnew.component';
import { InvitesComponent } from './Component/invites/invites.component';
import { PreviewInvitesComponent } from './Component/preview-invites/preview-invites.component';
import { BankAccountComponent } from './Component/bank-account/bank-account.component';






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
    PasscodeComponent,
    WarningComponent,
    InfoComponent,
    TrpasscodeComponent,
    WpasscodeComponent,
    UpdatePinComponent,
    MusicvendorComponent,
    InvoiceComponent,
    PlaneventComponent,
    PlanbudgetComponent,
    AddNewTicketsComponent,
    DatepickersComponent,
    CreatenewticketsComponent,
    ReviewnewComponent,
    InvitesComponent,
    PreviewInvitesComponent,
    BankAccountComponent,

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
    NgbModule,
    NgbDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

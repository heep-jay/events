import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './Component/create-event/create-event.component';
import { AddTicketsComponent } from './Component/add-tickets/add-tickets.component';
import { CreateTicketsComponent } from './Component/create-tickets/create-tickets.component';
import { ReviewComponent } from './Component/review/review.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { PlanComponent } from './Component/plan/plan.component';
import { PublishedComponent } from './Component/published/published.component';
import { FoodvendorComponent } from './Component/foodvendor/foodvendor.component';
import { FoodDetailsComponent } from './Component/food-details/food-details.component';
import { SolutionsComponent } from './Component/solutions/solutions.component';
import { SecurityComponent } from './Component/security/security.component';
import { ModalFormComponent } from './Component/modal-form/modal-form.component'
import { RequestComponent } from './Component/request/request.component'
import { TableComponent } from './Component/table/table.component';
import { CategoriesComponent } from './Component/categories/categories.component'
import { CarouselComponent } from './Component/carousel/carousel.component';
import { IprComponent } from './Component/ipr/ipr.component';
import { RarComponent } from './Component/rar/rar.component';
import { SubscriptionComponent } from './Component/subscription/subscription.component';
import { FoodDeetComponent } from './Component/food-deet/food-deet.component';
import { EventplanComponent } from './Component/eventplan/eventplan.component';
import { WalletComponent } from './Component/wallet/wallet.component';
import { PasscodeComponent } from './Component/passcode/passcode.component';
import { TrpasscodeComponent } from './Component/trpasscode/trpasscode.component';
import { WpasscodeComponent } from './Component/wpasscode/wpasscode.component';
import { UpdatePinComponent } from './Component/update-pin/update-pin.component';
import { InvoiceComponent } from './Component/invoice/invoice.component';
import { PlaneventComponent } from './Component/planevent/planevent.component';
import { PlanbudgetComponent } from './Component/planbudget/planbudget.component';
import { AddNewTicketsComponent } from './Component/add-new-tickets/add-new-tickets.component';
import { CreatenewticketsComponent } from './Component/createnewtickets/createnewtickets.component';
import { ReviewnewComponent } from './Component/reviewnew/reviewnew.component';
import { InvitesComponent } from './Component/invites/invites.component';
import { PreviewInvitesComponent } from './Component/preview-invites/preview-invites.component';
import { BankAccountComponent } from './Component/bank-account/bank-account.component';
import { InviteeComponent } from './Component/invitee/invitee.component';
import { AddInviteeComponent } from './Component/add-invitee/add-invitee.component';
import { ImportInviteeComponent } from './Component/import-invitee/import-invitee.component';
import { LandingComponent } from './Component/landing/landing.component';
import { PartnerProfileComponent } from './Component/partner-profile/partner-profile.component';
import { SeatingComponent } from './Component/seating/seating.component';
import { InvitetemplateComponent } from './Component/invitetemplate/invitetemplate.component';






const routes: Routes = [
  {
    component: FoodDetailsComponent,
    path: 'food/:id'
  },
  {
    component: FoodvendorComponent,
    path: 'food'
  },
  {
    component: FoodvendorComponent,
    path: 'food/search/:searchTerm'
  },
  {
    component: SolutionsComponent,
    path: 'solution'
  },
  {
    component: IprComponent,
    path: 'ipr'
  }, {
    component: RarComponent,
    path: 'rar'
  },
  {
    component: SecurityComponent,
    path: 'security'
  },
  {
    component: PlaneventComponent,
    path: 'plan-event'
  },
  {
    component: FoodDeetComponent,
    path: 'foodie'
  },
  {
    component: WalletComponent,
    path: 'wallet'
  },
  {
    component: WpasscodeComponent,
    path: 'welcome'
  },
  {
    component: TrpasscodeComponent,
    path: 'transpin'
  },
  {
    component: PasscodeComponent,
    path: 'passcode'
  },
  {
    component: UpdatePinComponent,
    path: 'update'
  },
  {
    component: RequestComponent,
    path: 'request'
  },
  {
    component: CategoriesComponent,
    path: 'categories'
  },
  {
    component: ModalFormComponent,
    path: 'modal'
  },
  {
    component: CarouselComponent,
    path: 'carousel'
  },
  {
    component: SubscriptionComponent,
    path: 'sub'
  },
  {
    component: PublishedComponent,
    path: 'publish'
  },
  {
    component: PlanComponent,
    path: 'plan'
  },
  {
    component: InvoiceComponent,
    path: 'invoice'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  }, {
    component: CreateTicketsComponent,
    path: 'create'
  },
  {
    component: TableComponent,
    path: 'table'
  },
  {
    component: ReviewComponent,
    path: 'review'
  },
  {
    component: PlanbudgetComponent,
    path: 'plan-budget'
  },
  {
    component: AddTicketsComponent,
    path: 'add'
  },
  {
    component: AddNewTicketsComponent,
    path: 'add-new'
  }, {
    component: CreatenewticketsComponent,
    path: 'create-new'
  }, {
    component: ReviewnewComponent,
    path: 'review-new'
  },
  {
    component: InvitesComponent,
    path: 'invites'
  }, {
    component: PreviewInvitesComponent,
    path: 'invites/preview'
  },
  {
    component: BankAccountComponent,
    path: 'add-bank'
  }, {
    component: InviteeComponent,
    path: 'invitee'
  }, {
    component: AddInviteeComponent,
    path: 'add-invitee'
  },
  {
    component: ImportInviteeComponent,
    path: 'import-invitee'
  },
  {
    component: LandingComponent,
    path: 'landing'
  }, {
    component: PartnerProfileComponent,
    path: 'partner'
  }, {
    component: SeatingComponent,
    path: 'seating'
  },  {
    component: InvitetemplateComponent,
    path: 'template'
  },{
    component: CreateEventComponent,
    path: ""
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

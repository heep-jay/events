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
    component: SecurityComponent,
    path: 'security'
  },
  {
    component: RequestComponent,
    path: 'request'
  },
  {
    component: ModalFormComponent,
    path: 'modal'
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
    component: DashboardComponent,
    path: 'dashboard'
  }, {
    component: CreateTicketsComponent,
    path: 'create'
  },
  {
    component: ReviewComponent,
    path: 'review'
  },
  {
    component: AddTicketsComponent,
    path: 'add'
  }, {
    component: CreateEventComponent,
    path: ""
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

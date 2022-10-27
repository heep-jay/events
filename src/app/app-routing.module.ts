import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './Component/create-event/create-event.component';
import { AddTicketsComponent } from './Component/add-tickets/add-tickets.component';
import { CreateTicketsComponent } from './Component/create-tickets/create-tickets.component';
import { ReviewComponent } from './Component/review/review.component';


const routes: Routes = [{
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

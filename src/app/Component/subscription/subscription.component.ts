import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  cards: string = 'monthly'
  constructor() { }

  ngOnInit(): void {
  }
  showMonthly() {
    this.cards = 'monthly'
    console.log(
      'working'
    )
  }
  showYearly() {
    this.cards = 'yearly'

  }
}

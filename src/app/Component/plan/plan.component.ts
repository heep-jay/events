import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  toggle: boolean = false;
  card!: string;
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  showFood(elementId: string): void {

    this.viewportScroller.scrollToAnchor(elementId);
    this.card = 'food';
  }
  showMusic() {
    this.card = 'music';
  }
  close(e: any) {
    e.stopPropagation();
    this.card = '';
  }

  foodToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
  }

}

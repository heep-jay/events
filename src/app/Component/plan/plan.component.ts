import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  toggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  foodToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
  }

}

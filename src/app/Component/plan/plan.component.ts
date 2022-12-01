import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  toggle: boolean = false;
  card!: string;
  constructor() { }

  ngOnInit(): void {
  }
  showFood() {
    this.card = 'food';
    document.getElementById("food")?.scrollIntoView({ behavior: "smooth" })
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

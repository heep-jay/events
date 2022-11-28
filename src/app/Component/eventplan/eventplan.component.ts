import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventplan',
  templateUrl: './eventplan.component.html',
  styleUrls: ['./eventplan.component.css']
})
export class EventplanComponent implements OnInit {
  toggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  foodToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
  }

}

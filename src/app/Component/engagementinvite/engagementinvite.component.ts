import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagementinvite',
  templateUrl: './engagementinvite.component.html',
  styleUrls: ['./engagementinvite.component.css']
})
export class EngagementinviteComponent implements OnInit {
  husband:string = "ALEX"
  wife:string = "EMILY"
  location:string = "BLUE CRANE LAKE LODGE"
  day:string = "FRIDAY"
  date_time:string = "MAY 19TH 7PM"
  phone:string = "123-456-7890"
  constructor() { }

  ngOnInit(): void {
  }

}

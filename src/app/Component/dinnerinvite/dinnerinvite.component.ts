import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinnerinvite',
  templateUrl: './dinnerinvite.component.html',
  styleUrls: ['./dinnerinvite.component.css']
})
export class DinnerinviteComponent implements OnInit {
  text1:string = "DINNER"
  text2:string = "DRINKS"
  inviter_invite:string = " HB Enterprise is celebrating it's tenth year"
  date:string = "Saturday, May 6th"
  time:string = "at 6:30pm"
  address:string = "1234, Waywardlane Lane, San Diego, CA 92222"
  rsvp:string = "Please RSVP"
  constructor() { }

  ngOnInit(): void {
  }

}

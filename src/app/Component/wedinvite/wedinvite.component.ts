import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedinvite',
  templateUrl: './wedinvite.component.html',
  styleUrls: ['./wedinvite.component.css']
})
export class WedinviteComponent implements OnInit {
husband_name: string = "Matt"
wife_name: string = "chloe"
date:string = "10"
year:string = "2022"
weekday: string = "Sunday"
month:string = "July"
time:string = "AT 5PM"
  constructor() { }

  ngOnInit(): void {
  }

}

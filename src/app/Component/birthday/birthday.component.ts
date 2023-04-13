import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
title:string = "Birthday Party";
celebrant_name:string = "Aaron Miller"
day:string = "Wednesday"
time:string = "4:00PM"
month:string = "September"
year:string = "2022";
date:string = "23"
location:string = "GLENDENNING GOLF RESORT"
address:string = "345 SAINT BENEDICT STREET, JOSHUA TREE California"
  constructor() { }

  ngOnInit(): void {
  }

}

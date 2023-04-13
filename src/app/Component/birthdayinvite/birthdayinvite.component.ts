import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthdayinvite',
  templateUrl: './birthdayinvite.component.html',
  styleUrls: ['./birthdayinvite.component.css']
})
export class BirthdayinviteComponent implements OnInit {
  title:string = "Birthday Party";
  celebrant_name:string = "Aaron Miller"
  location:string = "GLENDENNING GOLF RESORT"
  date:string = "23rd September 2022"
  time:string = "4:00PM"
  address:string = "345 SAINT BENEDICT STREET, JOSHUA TREE California"
  constructor() { }

  ngOnInit(): void {
  }

}

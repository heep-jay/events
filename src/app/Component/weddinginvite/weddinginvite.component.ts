import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weddinginvite',
  templateUrl: './weddinginvite.component.html',
  styleUrls: ['./weddinginvite.component.css']
})
export class WeddinginviteComponent implements OnInit {
husband_name:string= "Christian";
wife_name:string = "Anastasia";
date:string = "28 | AUG | 2023";
time:string = "AT FIVE O'CLOCK IN THE AFTER NOON";
address:string = "YELLOWSTONES ART MUSUEM 402 NORTH 27TH STREET BILLINGS .MT"

  constructor() { }

  ngOnInit(): void {
  }

}

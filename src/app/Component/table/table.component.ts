import { Component, OnInit } from '@angular/core';
interface Country {
  index: string;
  ticket_Name: string;
  ticket_Quantity: string;
  ticket_Price: number;
  status: string;
  salesEnd: string;
  more: string;
}

const COUNTRIES: Country[] = [
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
  {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  }, {
    index: '=',
    ticket_Name: 'Russia',
    ticket_Quantity: '0/50',
    ticket_Price: 5000,
    status: 'On Sale',
    salesEnd: 'Sep 26, 2022 at 7:00 PM',
    more: ''

  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor() { }
  countries = COUNTRIES;
  ngOnInit(): void {
  }

}

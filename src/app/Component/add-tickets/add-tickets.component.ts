import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  serial: string;
  name: string;
  ticketName: string;
  weight: number;
  symbol: string;
  end: string;
  more: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { serial: "=", ticketName: "General Admission", name: '15/20', weight: 5000, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '0/50', weight: 15000, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '5/10', weight: 7500, symbol: '🟢 On Sale', end: "Sep 26, 2022 at 7:00pm", more: "" },
  { serial: "=", ticketName: "VIP", name: '10/10', weight: 9000, symbol: '🔴 Sold Out', end: "Sep 26, 2022 at 7:00pm", more: "" },

];


@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit {
  displayedColumns: string[] = ['serial', 'ticketName', 'name', 'weight', 'symbol', 'end', 'more'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

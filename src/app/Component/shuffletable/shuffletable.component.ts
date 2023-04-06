import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  table: string;
  invitee_info: string;

  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '1', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '2',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '3',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4',  symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '4', symbol: 'equal'},
  {invitee_info: 'Sam Awazie', table: '7',  symbol: 'equal'},
];

@Component({
  selector: 'app-shuffletable',
  templateUrl: './shuffletable.component.html',
  styleUrls: ['./shuffletable.component.css']
})
export class ShuffletableComponent implements OnInit {
  @ViewChild(MatTable) table!:MatTable<any>

  displayedColumns: string[] = ['invitee_info', 'table', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
drag(event:CdkDragDrop<PeriodicElement[]>){
moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
this.table.renderRows();
}
}

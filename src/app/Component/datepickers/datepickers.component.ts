import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-datepickers',
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.css']
})
export class DatepickersComponent implements OnInit {
  model!: NgbDateStruct;
  date!: { year: number; month: number };

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.model = this.calendar.getToday();
  }

}

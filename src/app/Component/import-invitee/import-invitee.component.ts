import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-invitee',
  templateUrl: './import-invitee.component.html',
  styleUrls: ['./import-invitee.component.css']
})
export class ImportInviteeComponent implements OnInit {
  drawer: boolean = false;
  drawer_min: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

}

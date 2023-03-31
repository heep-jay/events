import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {
  edit: boolean = false;
  drawer: boolean = false;
  drawer_min: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onEditClick(e: any) {
    this.edit = !this.edit;
    console.log('working')
  }
  onDesignClick(e: any) {
    this.edit = false;
  }
  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-invites',
  templateUrl: './preview-invites.component.html',
  styleUrls: ['./preview-invites.component.css']
})
export class PreviewInvitesComponent implements OnInit {
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

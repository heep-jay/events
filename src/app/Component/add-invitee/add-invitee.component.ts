import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-invitee',
  templateUrl: './add-invitee.component.html',
  styleUrls: ['./add-invitee.component.css']
})
export class AddInviteeComponent implements OnInit {
  drawer: boolean = false;
  drawer_min: boolean = true;
  closeResult: string = "";
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }
  ngOnInit(): void {
  }

  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

}

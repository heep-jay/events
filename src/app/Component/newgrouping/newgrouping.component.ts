import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



interface Invites {
  name: string;
  email: string;
  guests: number;
  date: string;
  status: string;

}
const INVITES: Invites[] = [
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Pending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Attending"

  },
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Attending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Not Attending"

  },
  {
    name: "Sam Awazie",
    email: "SamAwazie@email.com",
    guests: 1,
    date: "Sept 26, 2022",
    status: "Pending"

  },
  {
    name: "Kainene Amira",
    email: "NeneAmira@email.com",
    guests: 0,
    date: "Sept 26, 2022",
    status: "Pending"

  },

];

@Component({
  selector: 'app-newgrouping',
  templateUrl: './newgrouping.component.html',
  styleUrls: ['./newgrouping.component.css']
})
export class NewgroupingComponent implements OnInit {

  invites = INVITES;
  closeResult: string = "";
  drawer: boolean = false;
  drawer_min: boolean = true;
  groupa:boolean = false;
  groupb:boolean = false;

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

  onTableToggle(){
this.groupa = !this.groupa

  }
  toggleb(){
this.groupb = !this.groupb
  }

  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

}

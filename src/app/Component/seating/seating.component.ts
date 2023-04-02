import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit {
  edit: boolean = false;
  seatingTemplate = true;
  seatingTables = false;
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

  onEditClick(e: any) {
    this.seatingTemplate = !this.seatingTemplate;
    this.seatingTables = !this.seatingTables
    console.log('working')
  }
  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }
}

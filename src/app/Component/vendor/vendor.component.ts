import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/Vendors';



@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  @Input()
  vendor!: Vendor;
  constructor() { }

  ngOnInit(): void {

  }

}

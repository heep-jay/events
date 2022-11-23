import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/Services/vendor.service';
import { Vendor } from 'src/app/Vendors';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private vendorService: VendorService) { }
  vendorId: string | null = null
  vendor!: Vendor;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    console.log("Vendor id is:", this.route.snapshot.paramMap.get('id'))

    this.vendorId = this.route.snapshot.paramMap.get('id')

    this.vendorService.getVendor(this.vendorId).subscribe((vendor) => {

      this.vendor = vendor
      console.log(this.vendor)
    })


  }

}

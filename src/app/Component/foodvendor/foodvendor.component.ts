import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/Services/vendor.service';
import { Vendor } from 'src/app/Vendors';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodvendor',
  templateUrl: './foodvendor.component.html',
  styleUrls: ['./foodvendor.component.css']
})
export class FoodvendorComponent implements OnInit {
  vendors: Vendor[] = [];
  filteredVendors: Vendor[] = [];

  constructor(private vendorService: VendorService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.vendorService.getVendors().subscribe((vendors) => {
          this.vendors = vendors.filter(vendor => vendor.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
          console.log(this.vendors)

        });
      } else {
        this.vendorService.getVendors().subscribe((vendors) => (this.vendors = vendors));
      }
    })
  }


  ngOnInit(): void {
    // this.vendorService.getVendors().subscribe((vendors) => (this.vendors = vendors));

  }
  searchVendor(searchTerm: string) {
    if (searchTerm) {
      this.router.navigateByUrl('food/search/' + searchTerm)
    }
    else if (searchTerm == null || undefined || " ") {
      this.router.navigateByUrl('food')
    }
  }

  something() {
    console.log("a")
  }
}

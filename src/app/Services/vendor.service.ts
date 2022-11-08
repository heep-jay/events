import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vendor } from '../Vendors';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:3000/vendors';
  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.apiUrl);
  }
  getVendor(id: string | null): Observable<Vendor> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Vendor>(url);
  }

  // getVendorsBySearch(searchTerm: string){
  //   return
  // }
}

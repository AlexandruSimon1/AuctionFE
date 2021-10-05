import { Address } from './../models/address';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.address}`;

  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}`);
  }

  getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}/${id}`);
  }

  deleteAddressById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createAddress(address: Address): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, address);
  }

  updateAddressById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }
}

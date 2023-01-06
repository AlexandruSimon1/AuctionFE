import { Purchasing } from './../models/purchasing';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bidding } from '../models/bidding';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.user}`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  deleteUserById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, user);
  }

  updateUserById(id: number, value: any): Observable<Object> {
    return this.http.patch<Object>(`${this.baseUrl}/${id}`, value);
  }
  getBiddingsByUserId(id: number): Observable<Bidding[]> {
    return this.http.get<Bidding[]>(`${this.baseUrl}/${id}/bidding`);
  }

  getPurchasesByUserId(id: number): Observable<Purchasing[]> {
    return this.http.get<Purchasing[]>(`${this.baseUrl}/${id}/purchasing`);
  }

  getAddressesByUserId(id: number): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}/${id}/addresses`);
  }
}

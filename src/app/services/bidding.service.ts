import { Bidding } from './../models/bidding';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiddingService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.bidding}`;
  
  constructor(private http: HttpClient) { }

  getAllBiddings(): Observable<Bidding[]> {
    return this.http.get<Bidding[]>(`${this.baseUrl}`);
  }

  // getBiddingById(id: number): Observable<Bidding> {
  //   return this.http.get<Bidding>(`${this.baseUrl}/${id}`);
  // }

  deleteBiddingById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createBidding(bidding: Bidding): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, bidding);
  }

  updateBiddingById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }
  
  getBiddingsByUserId(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

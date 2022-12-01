import { Auction } from './../models/auction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.auction}`;
  
  constructor(private http: HttpClient) { }

  getAllAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(`${this.baseUrl}`);
  }

  getAuctionById(id: number): Observable<Auction> {
    return this.http.get<Auction>(`${this.baseUrl}/${id}`);
  }

  deleteAuctionById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createAuction(auction: Auction): Observable<Auction> {
    return this.http.post<Auction>(`${this.baseUrl}`, auction);
  }

  updateAuctionById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }

  getRecentlyAddedAuctions(){
    return this.http.get(`${this.baseUrl}/recently`);
  }

  getEndingAuctions(){
    return this.http.get(`${this.baseUrl}/ending`);
  }

  getRecentlyEndedAuctions(){
    return this.http.get(`${this.baseUrl}/recentlyEnded`);
  }

}

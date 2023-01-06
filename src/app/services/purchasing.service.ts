import { Purchasing } from './../models/purchasing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchasingService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.purchasing}`;
  
  constructor(private http: HttpClient) { }

  getAllPurchases(): Observable<Purchasing[]> {
    return this.http.get<Purchasing[]>(`${this.baseUrl}`);
  }

  getPurchasingById(id: number): Observable<Purchasing> {
    return this.http.get<Purchasing>(`${this.baseUrl}/${id}`);
  }

  deletePurchasingById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createPurchasing(purchasing: Purchasing): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, purchasing);
  }

  updatePurchasingById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }
}

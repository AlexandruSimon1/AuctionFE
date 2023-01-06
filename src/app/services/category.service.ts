import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auction } from '../models/auction';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.category}`;
  private headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', 'http://localhost:4200');
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  deleteCategoryById(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/${id}`);
  }

  createCategory(category: Category): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}`, category);
  }

  updateCategoryById(id: number, value: any): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/${id}`, value);
  }
  getAuctionsByCategoryId(id: number): Observable<Auction[]>{
    return this.http.get<Auction[]>(`${this.baseUrl}/${id}/auctions`);
  }
}

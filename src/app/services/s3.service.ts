import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private baseUrl = `${environment.baseAPIUrl}/${environment.api.s3}`;

  constructor(private http: HttpClient) { }

  createImage(id: number, image: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', image);
    return this.http.post(`${this.baseUrl}/upload/${id}`, formData);
  }

}

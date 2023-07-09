import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApuTransportPriceService {

  private apiUrl = 'api/transport';

  constructor(private http: HttpClient) { }

  getTransportData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTransport(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTransport(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateTransport(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteTransport(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

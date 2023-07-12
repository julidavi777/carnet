import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApuTransportPriceService {

  readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTransportData(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'apu-transport-prices');
  }

  getTransport(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}apu-transport-prices/${id}`);
  }

  createTransport(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL+'apu-transport-prices', data);
  }

  updateTransport(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}apu-transport-prices/${id}`, data);
  }

 /*  deleteTransport(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  } */
}

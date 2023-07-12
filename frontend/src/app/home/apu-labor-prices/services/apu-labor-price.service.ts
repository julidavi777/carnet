import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApuLaborPriceService {

  readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getLaborPrices(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'apu-labor-prices');
  }

  getLaborPrice(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}apu-labor-prices/${id}`);
  }

  createLaborPrice(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL+'apu-labor-prices', data);
  }

  updateLaborPrice(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}apu-labor-prices/${id}`, data);
  }

  /* deleteLaborPrice(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  } */
}

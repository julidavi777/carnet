import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://tu-backend-api-url.com'; // Cambia esto a la URL de tu API de Laravel

  constructor(private http: HttpClient) {}

  getNearExpirations(): Observable<any> {
    const endpoint = `${this.apiUrl}/api/employee/near-expirations`; // Cambia la ruta de acuerdo a tu API

    return this.http.get(endpoint);
  }
}

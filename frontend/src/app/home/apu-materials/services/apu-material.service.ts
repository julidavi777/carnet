import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApuMaterialService {
  readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.API_URL+"apu-materials");
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}apu-materials/${id}`);
  }

  create(material: any): Observable<any> {
    return this.http.post(this.API_URL+"apu-materials", material);
  }

  update(id: number, material: any): Observable<any> {
    return this.http.put(`${this.API_URL}apu-materials/${id}`, material);
  }

/*   delete(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  } */
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApuTool } from '../interfaces/apu-tool.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApuToolService {
 
  readonly API_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getApuTools(): Observable<ApuTool[]> {
    return this.http.get<ApuTool[]>(this.API_URL+'apu-tools');
  }

  getApuTool(id: number): Observable<ApuTool> {
    return this.http.get<ApuTool>(`${this.API_URL}apu-tools/${id}`);
  }

  createApuTool(apuTool: ApuTool): Observable<ApuTool> {
    return this.http.post<ApuTool>(this.API_URL+'apu-tools', apuTool);
  }

  updateApuTool(id: number, apuTool: ApuTool): Observable<ApuTool> {
    return this.http.put<ApuTool>(`${this.API_URL}apu-tools/${id}`, apuTool);
  }

 /*  deleteApuTool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  } */
}
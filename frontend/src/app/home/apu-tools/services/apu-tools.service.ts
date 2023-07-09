import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApuTool } from '../interfaces/apu-tool.interface';

@Injectable({
  providedIn: 'root'
})
export class ApuToolService {
  private apiUrl = 'api/apu-tools';

  constructor(private http: HttpClient) { }

  getApuTools(): Observable<ApuTool[]> {
    return this.http.get<ApuTool[]>(this.apiUrl);
  }

  getApuTool(id: number): Observable<ApuTool> {
    return this.http.get<ApuTool>(`${this.apiUrl}/${id}`);
  }

  createApuTool(apuTool: ApuTool): Observable<ApuTool> {
    return this.http.post<ApuTool>(this.apiUrl, apuTool);
  }

  updateApuTool(id: number, apuTool: ApuTool): Observable<ApuTool> {
    return this.http.put<ApuTool>(`${this.apiUrl}/${id}`, apuTool);
  }

  deleteApuTool(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  readonly API_URL = environment.baseUrl;
  constructor(
    private http:HttpClient,
  ) { }

  getRoles() {
    return this.http.get(`${this.API_URL}roles`);
  }

  createRole(data: any){
    return this.http.post(`${this.API_URL}roles`, data);
  }

  getPermissions(){
    return this.http.get(`${this.API_URL}permissions`);
  }
}

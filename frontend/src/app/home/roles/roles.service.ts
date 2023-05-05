import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  readonly API_URL = environment.baseUrl;

  _roleData: object | null = null;

  constructor(
    private http:HttpClient,
  ) { }

  getRoles() {
    return this.http.get(`${this.API_URL}roles`);
  }

  createRole(data: any){
    return this.http.post(`${this.API_URL}roles`, data);
  }

  updateRole(data: any, id_role: any){
    return this.http.put(`${this.API_URL}roles/${id_role}`, data);
  }

  deleteRole(role_id: any){
    return this.http.delete(`${this.API_URL}roles/${role_id}`);
  }

  getPermissions(){
    return this.http.get(`${this.API_URL}permissions`);
  }

  set roleData(data: object | null){
    this._roleData = data;
  }

  get roleData(){
    return this._roleData;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }
  

  getEmployees(){
    return this.http.get(this.API_URL+'employees')
  }

  registerEmployee(data: any){
    return this.http.post(this.API_URL+'employees', data);
  }

  updateEmployee(data: any, id: any){
    return this.http.put(this.API_URL+'employees/'+id, data);
  }

  deleteEmployee(id){
    return this.http.delete(this.API_URL+'employees/'+id)
  }

  private _dataEmployee: any | null = null;
  get dataEmployee(){
    return this._dataEmployee;
  }

  set dataEmployee(data: any){
    this._dataEmployee = data;
  }
}

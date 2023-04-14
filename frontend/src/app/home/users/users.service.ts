import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  getUsers(){
    return this.http.get(this.API_URL+'users')
  }

  registerUser(data: any){
    return this.http.post(this.API_URL+'register', data);
  }

  updateUser(data: any, id: any){
    return this.http.put(this.API_URL+'users/'+id, data);
  }

  deleteUser(id){
    return this.http.delete(this.API_URL+'users/'+id)
  }

  private _dataUser: any | null = null;
  get dataUser(){
    return this._dataUser;
  }

  set dataUser(data: any){
    this._dataUser = data;
  }
}

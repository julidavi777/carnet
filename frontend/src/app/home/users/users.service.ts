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
}

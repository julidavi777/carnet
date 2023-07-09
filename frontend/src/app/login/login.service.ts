import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient,
  ) { }

  login(data: any){
    return this.http.post(`${this.API_URL}login`, data);
  }

  confirmAccount(token: string){
    return this.http.get(`${this.API_URL}verifyAccount?token=${token}`)
  }

  me(){
    return this.http.post(`${this.API_URL}me`, {});
  }

}

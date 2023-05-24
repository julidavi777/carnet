import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  readonly API_URL = environment.baseUrl;


  constructor(
    private http:HttpClient,
  ) { }

  getChapters(){
    return this.http.get(this.API_URL+"chapters");
  }

  saveChapter(data){
    return this.http.post(this.API_URL+"chapters", data);
  }
}

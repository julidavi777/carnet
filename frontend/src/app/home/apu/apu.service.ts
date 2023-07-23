import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApuService {
  readonly API_URL = environment.baseUrl;

   constructor(private http: HttpClient) { }


   getInternalChapters(){
    return this.http.get(this.API_URL+'apu-internal-chapters');
   }

   saveApu(data){
    return this.http.post(this.API_URL+'apus', data);
   }

   getApuSchema(activity_id){
   
    return this.http.get(this.API_URL+`apu-activities/${activity_id}/apus`);
   }
}

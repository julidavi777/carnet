import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApuActivitiesService {
  readonly API_URL = environment.baseUrl;
  _apuActivityData = null;

  units = [
    {
      "id": 1,
      "name": "M2",
    },
    {
      "id": 2,
      "name": "UND",
    },
    {
      "id": 3,
      "name": "ML",
    },
    {
      "id": 4,
      "name": "VJE",
    },
    {
      "id": 5,
      "name": "MES",
    },
    {
      "id": 6,
      "name": "M3",
    },
    {
      "id": 7,
      "name": "GB",
    },
    {
      "id": 8,
      "name": "UN",
    },
    {
      "id": 9,
      "name": "PTO",
    },
    {
      "id": 10,
      "name": "SEM",
    },
    {
      "id": 11,
      "name": "VJ",
    }
  ]

  constructor(private http: HttpClient) { }


  getUnits(){
    return this.units;
  }

  getApuActivities(){
    return this.http.get(this.API_URL+'apu-activities')
  }

  saveApuActivity(data){
    return this.http.post(this.API_URL+'apu-activities', data)
  }

  set apuActivityData(data){
    this._apuActivityData = data;
  }

  get apuActivityData(){
    return this._apuActivityData;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes-indicadores',
  templateUrl: './informes-indicadores.page.html',
  styleUrls: ['./informes-indicadores.page.scss'],


})
export class InformesIndicadoresPage implements OnInit {
  basicData: any;
  basicOptions: any;

  constructor() { }


  ngOnInit() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
  };
  }

}


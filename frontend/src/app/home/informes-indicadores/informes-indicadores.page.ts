import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-informes-indicadores',
  templateUrl: './informes-indicadores.page.html',
  styleUrls: ['./informes-indicadores.page.scss'],
})
export class InformesIndicadoresPage implements OnInit {


  isLarge = false;

toggleSize() {
this.isLarge = !this.isLarge;
}
chart: any;
showTable = false;

public columnSize: number = 2;
public isExpanded: boolean = false;

expandColumn(): void {
if (!this.isExpanded) {
this.columnSize = 5; // reduce la columna a la mitad del tamaño original
this.isExpanded = true;
} else {
this.columnSize = 3;
this.isExpanded = false;
}
}

constructor() { }

toggleCard() {
this.isExpanded = !this.isExpanded;
}


  ngOnInit(): void {
    const cantCotizacionData = {
      label: 'Cantidad de Cotizaciones',
      data: [159, 173, 328, 369, 400, 523, 551, 376, 495, 478],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    };



    const data = {
      labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [cantCotizacionData]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    this.chart = new Chart('canvas', {
      type: 'line',
      data: data,

    });

    // codigo grafica 2

    const ofertasPresentadas = {
      label: 'Ofertas presentadas',
      data: [42,42,57,31,43,29,23,38,37,32,45,23,442],

    };


    const data2 = {
      labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV','DIC'],
      datasets: [ofertasPresentadas]
    };

    const options2 = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 60
          }
        }]
      }
    };

    this.chart = new Chart('canvas2', {
      type: 'bar',
      data: data2,

    });
  }
}

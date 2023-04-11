import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-informes-indicadores',
  templateUrl: './informes-indicadores.page.html',
  styleUrls: ['./informes-indicadores.page.scss'],
})
export class InformesIndicadoresPage implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    const cantCotizacionData = {
      label: 'Cantidad de Cotizaciones',
      data: [159, 173, 328, 369, 400, 523, 551, 376, 495, 478],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    };

    // const valorCotizadoData = {
    //   label: 'Valor Cotizado',
    //   data: [2426123475, 5532506160, 10137416340, 14933353838, 22724668511, 31826497443, 27767320222, 17616276341, 36097335555, 33270877386],
    //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //   borderColor: 'rgba(54, 162, 235, 1)',
    //   borderWidth: 1
    // };

    // const valorVendidoData = {
    //   label: 'Valor Vendido',
    //   data: [338451794, 1375582489, 2301445604, 2740141101, 4468492271, 3869987681, 4764715525, 4470838941, 5182437244, 6624266503],
    //   backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //   borderColor: 'rgba(75, 192, 192, 1)',
    //   borderWidth: 1
    // };

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
  }
}

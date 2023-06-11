import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as pdfMake from 'pdfmake/build/pdfmake';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;



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

  generatePDF() {
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

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const canvasImg = canvas.toDataURL('image/png');

    const docDefinition = {
      content: [
        {
          image: canvasImg,
          width: 500,
          height: 400
        }
      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }


  createPdf(){
    const pdfDefinition: any = {
      pageOrientation: 'landscape',
      content: [
        {
          text: 'Indicadores Gestión Comercial\n\n',
          style: 'header',
          alignment: 'center',
          fontSize: 20
        },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [100, 40, 60, 30, 30, 30, 30, 30, 30, 30, 50, 30],
            body: [
              [
                { rowSpan: 4, text: 'Aqui va el logo' },
                { colSpan: 11, text: 'CUADRO MANDO INTEGRADO - INDICADORES DE GESTIÓN', style: 'tableHeader', color: 'white', background: 'blue', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', ''
              ],
              [
                { rowSpan: 2, text: 'Aqui va el logo' },
                { colSpan: 5, text: 'FECHA DE CONTROL', style: 'tableHeader', alignment: 'right',fontSize: 8 },
                '', '', '', '', {colSpan: 6, text:'23/02/2023', style: 'tableHeader', alignment: 'center', fontSize: 8}, '', '', '', '', '',
              ],

              [
                { rowSpan: 2, text: 'Aqui va el logo' },
                { colSpan: 5, text: 'GERENTE COMERCIAL', style: 'tableHeader', alignment: 'right' , fontSize: 8},
                '', '', '', '', {colSpan: 6, text:'JUAN GUILLERMO RENDON', style: 'tableHeader', alignment: 'center',fontSize: 8}, '', '', '', '', '',
              ],
              [
                { rowSpan: 2, text: 'Aqui va el logo' },
                { colSpan: 5, text: 'DIRECTOR COMERCIAL', style: 'tableHeader', alignment: 'right',fontSize: 8 },
                '', '', '', '', {colSpan: 6, text:'ALEJANDRO ROMERO', style: 'tableHeader', alignment: 'center',fontSize: 8}, '', '', '', '', '',
              ],
              [
                { colSpan: 12, text: '', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],
              [
                { colSpan: 12, text: 'TOTAL PROPUESTAS GESTIONADAS', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],


            ],
          },


        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 50, 60, 30, 30, 50, 30, 30, 30, 40, 50, 30],
            body: [
              [
                { rowSpan: 3, text: '201',fontSize: 30 },
                { text: '55%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'DINFRO S.A.S', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '111', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 92.760.506.448', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 44.249.398.747', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '48%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { rowSpan: 3, text: '201',fontSize: 12 },
                { text: '11%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CYS S.A.S', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '23', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 92.760.506.448', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 14.224.113.471', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '20%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],

              [
                { rowSpan: 3, text: '201',fontSize: 12 },
                { text: '33%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'DINCREA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '67', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 92.760.506.448', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 30.228.999.230', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '33%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { colSpan: 12, text: '', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],
              // [
              //   // { rowSpan: 4, text: 'PROPUESTAS APROBADAS',fontSize: 8 },
              //   { rowSpan: 4, colSpan: 6, text: '31%', alignment: 'center' },'', '', '', '','',
              //   { rowSpan: 4, colSpan: 6, text: '12%', alignment: 'center' },'', '', '', '','',

              // ],


            ],
          },


        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 50, 60, 30, 30, 50, 30, 30, 30, 40, 50, 30],
            body: [
              [
                {
                  rowSpan: 4,
                  stack: [
                    { text: 'PROPUESTAS APROBADAS', fontSize: 10 },
                    { text: '62', fontSize: 40, alignment: 'center' }
                  ]
                },
                { colSpan: 6, text: '31%', alignment: 'center' },
                '', '', '', '', '',
                { colSpan: 5, text: '12%', alignment: 'center' },
                '', '', '', '',
              ],
              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '81%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CONSULTORÍA Y DISEÑOS', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '50', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 11.573.597.978', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$10.489.439.013', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '91%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '11%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'GERENCIA E INTERVENTORIA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '7', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 11.573.597.978', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$248.139.057', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '2%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],

              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '8%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CONST. Y MANTENIMIENTO', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '5', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 11.573.597.978', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$820.019.574', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '7%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { colSpan: 12, text: '', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],
              // [
              //   { colSpan: 6, text: '31%', alignment: 'center' },'', '', '', '', '',
              //   { colSpan: 6, text: '12%', alignment: 'center' },'', '', '', '', '',
              // ],


            ],
          },


        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 50, 60, 30, 30, 50, 30, 30, 30, 40, 50, 30],
            body: [
              [
                {
                  rowSpan: 4,
                  stack: [
                    { text: 'PENDIENTES POR DEFINIR', fontSize: 10 },
                    { text: '23', fontSize: 40, alignment: 'center' }
                  ]
                },
                { colSpan: 6, text: '11%', alignment: 'center' },
                '', '', '', '', '',
                { colSpan: 5, text: '15%', alignment: 'center' },
                '', '', '', '',
              ],
              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '48%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'PROBABILIDAD ALTA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '11', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 14.257.923.096', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$7.081.841.090', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '50%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '26%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'PROBABILIDAD MEDIA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '6', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 14.257.923.096', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$5.725.112.032', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '40%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],

              [

                { rowSpan: 3, text: '62',fontSize: 12 },
                { text: '8%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'PROBABILIDAD BAJA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '6', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 14.257.923.096', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$1.450.999.974', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '10%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { colSpan: 12, text: '', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],
              // [
              //   { colSpan: 6, text: '31%', alignment: 'center' },'', '', '', '', '',
              //   { colSpan: 6, text: '12%', alignment: 'center' },'', '', '', '', '',
              // ],


            ],
          },


        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 50, 60, 30, 30, 50, 30, 30, 30, 40, 50, 30],
            body: [
              [
                {
                  rowSpan: 7,
                  stack: [
                    { text: 'NO ADJUDICADAS', fontSize: 8 },
                    { text: '68', fontSize: 40, alignment: 'center' }
                  ]
                },
                { colSpan: 6, text: '34%', alignment: 'center' },
                '', '', '', '', '',
                { colSpan: 5, text: '39%', alignment: 'center' },
                '', '', '', '',
              ],
              [

                { rowSpan: 7, text: '62',fontSize: 12 },
                { text: '81%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'COSTO', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '55', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$30.615.948.625', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '85%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { rowSpan:7, text: '0',fontSize: 12 },
                { text: '0%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'TIEMPO DE ENTREGA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '0', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ -', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '0%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [

                { rowSpan: 7, text: '62',fontSize: 12 },
                { text: '4%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'PROP. TECNICANO VIALE', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '3', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$2.634.163.243', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '7%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { rowSpan: 7, text: '0',fontSize: 12 },
                { text: '0%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CALIDAD DE SERVICIO', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '0', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ -', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '0%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { rowSpan: 7, text: '0',fontSize: 12 },
                { text: '0%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'POCA CERCANIA CON EL CLIENTE', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '0', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ -', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '0%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],

              [
                { rowSpan: 7, text: '0',fontSize: 12 },
                { text: '0%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CONFIDENCIALIDAD', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '0', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 35.929.539.628', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ -', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '0%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { colSpan: 12, text: '', alignment: 'center' },
                '', '', '', '', '', '', '', '', '', '', ''
              ],
              // [
              //   { colSpan: 6, text: '31%', alignment: 'center' },'', '', '', '', '',
              //   { colSpan: 6, text: '12%', alignment: 'center' },'', '', '', '', '',
              // ],


            ],
          },


        },


        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 50, 60, 30, 30, 50, 30, 30, 30, 40, 50, 30],
            body: [
              [
                {
                  rowSpan: 4,
                  stack: [
                    { text: 'PROYECTOS NO EJECUTADOS', fontSize: 8 },
                    { text: '48', fontSize: 40, alignment: 'center' }
                  ]
                },
                { colSpan: 6, text: '24%', alignment: 'center' },
                '', '', '', '', '',
                { colSpan: 5, text: '10%', alignment: 'center' },
                '', '', '', '',
              ],
              [
                { rowSpan: 3, text: '201',fontSize: 30 },
                { text: '104%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'DINFRO S.A.S', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '24', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 9.510.202.127', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 44.249.398.747', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '33%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],
              [
                { rowSpan: 3, text: '201',fontSize: 12 },
                { text: '11%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'CYS S.A.S', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '23', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 9.510.202.127', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 14.224.113.471', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '7%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],

              [
                { rowSpan: 3, text: '201',fontSize: 12 },
                { text: '33%', style: 'tableHeader', alignment: 'center', fontSize:10 },
                {colSpan:2, text: 'DINCREA', style: 'tableHeader', alignment: 'center', fontSize: 10 },'', { text: '67', style: 'tableHeader', alignment: 'center' ,fontSize: 10},{rowSpan: 3,colSpan:3, text: '$ 9.510.202.127', style: 'tableHeader', alignment: 'center',fontSize: 10 },  '', '', {colSpan:2, text: '$ 30.228.999.230', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '', {colSpan:2, text: '26%', style: 'tableHeader', alignment: 'center',fontSize: 10 }, '',
              ],





            ],
          },


        },
      ],
      layout: {
        hLineWidth: function (i, node) {
          return 1;
        },
        vLineWidth: function (i, node) {
          return 1;
        },
        hLineColor: function (i, node) {
          return "blue";
        },
        vLineColor: function (i, node) {
          return "blue";
        },
      },


      //   styles: {
      //     // Estilo para el encabezado de la tabla
      //     tableHeader: {
      //       fontSize: 10,
      //       bold: true,
      //       color: 'blue'
      //     },

      //     // Estilo para el cuerpo de la tabla
      //     tableExample: {
      //       fontSize: 8,
      //       margin: [0, 5, 0, 15] // Margen superior, derecho, inferior e izquierdo respectivamente
      //     }


      // },




    }



    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();


  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupplyApuFormComponent } from './supply-apu-form/supply-apu-form.component';

import * as pdfMake from 'pdfmake/build/pdfmake';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApuService } from './apu.service';
import { ApuActivitiesService } from '../apu-activities/apu-activities.service';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-apu',
  templateUrl: './apu.page.html',
  styleUrls: ['./apu.page.scss'],
})
export class ApuPage implements OnInit {
  rows =[];
  temp = [];

  internalChapters = []

  apuAcitivityData = null;

  constructor(
    public modalController: ModalController,
    private apuService: ApuService,
    private apuActivitiesService: ApuActivitiesService,
    private router: Router,
  ) { }

  ngOnInit() {
    //this.apuAcitivityData = this.apuActivitiesService.apuActivityData;
    this.apuAcitivityData = {
      "id": 9,
      "cap": "16.001",
      "description": "22",
      "unit": "PTO",
      "quantity": 2,
      "unit_value": 22,
      "status": true,
      "customer_id": 23,
      "chapter_id": 16,
      "created_at": "2023-07-13T01:02:13.000000Z",
      "updated_at": "2023-07-13T01:02:13.000000Z",
      "customer": {
          "id": 23,
          "identification_type": 2,
          "identification": "830004993",
          "digit_v": "8",
          "name": "Casatoro S.A",
          "surname": "Casatoro S.A",
          "phone_number": "7460010",
          "address": "Carrera 72 # 170 - 97 Av. Boyaca",
          "email": "tienda@casatoro.com",
          "razon_social": "Casatoro S.A",
          "razon_comercial": "Casatoro S.A",
          "rut_file": null,
          "camara_commerce_file": null,
          "income_statement_file": null,
          "cliente_logo": null,
          "status": true,
          "created_at": "2023-04-12T13:59:51.000000Z",
          "updated_at": "2023-04-28T16:40:08.000000Z",
          "departamento_id": 15,
          "municipio_id": 517,
          "municipio": {
              "id": 517,
              "name": "BOGOTA D.C.",
              "departamento_id": 15,
              "created_at": null,
              "updated_at": null
          }
      },
      "chapter": {
          "id": 16,
          "sequential": 16,
          "name": "CARPINTERIA METALICA Y VIDRIO TEMPLADO",
          "status": true,
          "created_at": null,
          "updated_at": null
      }
  };

    if(this.apuAcitivityData == null){
      this.router.navigate(['/home/apu-activities'])
    }

    console.log(this.apuAcitivityData)
    this.getInternalChapters();
  }

  getInternalChapters(){
    this.apuService.getInternalChapters().subscribe((internalChapters: any) => {
      this.internalChapters = internalChapters;
      let data = this.internalChapters.map(e => {
        e.treeStatus = "expanded" 
        return e;
      })
      this.temp = [...data];

      this.rows = data;

    })
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'expanded';
    } else {
      row.treeStatus = 'collapsed';
    }
    this.rows = [...this.rows];
  }

/*   async openCreateForm(){
    
  } */


  async addItemAction(row){
    console.log(row)
    const modal = await this.modalController.create({
      component: SupplyApuFormComponent,
      cssClass: 'my-custom-modal-css',
      backdropDismiss: false,
      componentProps: {
        internalChapterChoosed: row
      }
    });
    modal.onDidDismiss()
    .then((res) => {
        console.log(res)
        if(res.data?.data){
          let item_data = res.data.data?.item_data
          this.temp.push(item_data)


          this.rows = [...this.temp];
          console.log(this.rows)
        }
    });
    return await modal.present();
  }

  onGeneratePdf(){
    // playground requires you to assign document definition to a variable called dd
    const getTableContent = () => {
      let res = []
      this.internalChapters.forEach((internalChapter) => {
        //subHeader
        res.push( [
          {
          text: internalChapter?.name,
          colSpan: 4,
          style: 'subheader'
          },
          '',
          '',
          '',
          '',
      ])
      //h3 Header
      res.push(
        [
          {
          text: "Descripción",
          },
          {
          text: "Unidad",
              style: 'tableHeader'
          },
           {
          text: "Rendimiento",
              style: 'tableHeader'
          },
           {
          text: "Valor Unitario",
              style: 'tableHeader'
          },
            {
          text: "Valor parcial",
              style: 'tableHeader'
          },
      ]
      )

      //DATA
     let data =  this.rows.filter((row) => row.internal_chapter_id == internalChapter.id)

     if(data.length > 0){
      data.forEach((row) => {
        res.push( [
          {
          text: row?.description,
          },
          {
          text: row?.unit,
          },
           {
          text: row?.performance_value,
          },
           {
          text: row?.unit_value,
          },
            {
          text: "10",
          },
          ])
      })
     }
     /* res.push( [
      {
      text: "Herramienta menor",
      },
      {
      text: "%",
      },
       {
      text: "1.00",
      },
       {
      text: "9.79",
      },
        {
      text: "10",
      },
      ]) */
      //subTotal
      res.push( [
        {
         text: "",
          border: [false, false, true, false],
          colSpan: 3
         },
         '',
         '',
          {
         text: "Sub-Total",
             style: 'tableHeader'
         },
           {
         text: "23",
         },
     ])
     

     //space
     res.push([
      {
        text: "",
         border: [false, false, false, false],
         colSpan: 5
        },
      '',
      '',
      '',
      '',
    ])
    res.push([
      {
        text: "",
         border: [false, false, false, false],
         colSpan: 5
        },
      '',
      '',
      '',
      '',
    ])

     
    })
      let base =  [
        [
            {
            text: "I EQUIPaaO",
            colSpan: 4,
            style: 'subheader'
            },
            '',
            '',
            '',
            '',
        ],
        [
            {
            text: "Descripción",
            },
            {
            text: "Unidad",
                style: 'tableHeader'
            },
             {
            text: "Rendimiento",
                style: 'tableHeader'
            },
             {
            text: "Valor Unitario",
                style: 'tableHeader'
            },
              {
            text: "Valor parcial",
                style: 'tableHeader'
            },
        ],
        [
            {
            text: "Herramienta menor",
            },
            {
            text: "%",
            },
             {
            text: "1.00",
            },
             {
            text: "9.79",
            },
              {
            text: "10",
            },
        ],
         [
           {
            text: "",
             border: [false, false, true, false],
             colSpan: 3
            },
            '',
            '',
             {
            text: "Sub-Total",
                style: 'tableHeader'
            },
              {
            text: "23",
            },
        ]
        
        ]
        console.log(res)
      return res;
    }
var dd = {
  pageOrientation: 'landscape',
 content: [
     {
         table: {
         widths: ['*',100 , 70, '*'],
         body: [
             [
                 {
                     text: "Objecto Contrato",
                     colSpan: 2,
                     style: 'tableHeader'
                 },
                 '',
                  {
                     text: "Fecha",
                     style: 'tableHeader'
                 },
                  {
                     image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAFWCAYAAAABuGjPAAAACXBIWXMAACHVAAAh1QEEnLSdAAB69klEQVR4Xu2dB3wURRfA53pN740USEIooffQOwgC0rEB+iEi9oqKYu+iCIgIKE2QDtJ77z0J6b33y/X+zWzuksvlyiYQBHz7MybsTnnzn9l5OzNv3iAEFxAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEg8FASKFZKPeVqpeChFB6EBgJAAAgAASBACBwsSOkj/PVp4/zTf30DRIAAEAACQAAIPJQEvk+58AzzpzFG9GkXI/pukHFz5u2RD2VBQGggAASAgBMCDCD06BJYknpp2vwd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5MqvdcWKThfA6XDJy9WfctpcrSrzypZfJpvPGb7cVnfwXrwG7powb3G28lKv1OrTIzE3TzHLJ6+128C9YW5dzpM0FNikPlNxvm+m7EpflUHm6cryKYhw7XE0kNfxslAgUqVWnO+nMla6u7ODs0PcYm86A4yPiOlUrS8MZOADBVq59jvM5wlqR80livSWiZWHxpZrciKxFasuWND2SriwzyFvl5CiSkWRR57iSn+sTHWtxP3343iNGr0UlKe3LEcpkYRFACf2qrdrUIktWYtkKVGl6rQY7O1DE8zvesxV6NFgvQtbSwYnVR4fXaxOa0dW/tw4gRmRwkF7sc/SVHy0kSFTcqmXVFvmI2b450Z4db5umU+pIrtFYuXBcWWarGi8lmbw40fGR7sM3uYlCiorq87Hp7je6sbC9djSLe4gj217b6AzxvAcCAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEPiXCfwfUM5sbgpuc9QAAAAASUVORK5CYII=",
                     fit: [120, 160],
                     rowSpan: 3,
                     alignment: 'center'
                 },
             ],
              [
                 {
                     text: this.apuAcitivityData?.customer?.name+" "+this.apuAcitivityData?.customer?.surname,
                     colSpan: 2
                 },
                 '',
                  {
                     text: "03/02/2022",
                     rowSpan: 3
                 },
                 '',
             ],
             [
                 {
                     text: "CAPÍTULO",
                     style: 'tableHeader'
                 },
                 {
                     text: this.apuAcitivityData?.chapter?.name
                 },
                  '',
                  '',
             ],
             [
                 {
                     text: "SUBCAPÍTULO",
                     style: 'tableHeader'
                 },
                 {
                     text: "Sub "
                 },
                  '',
                  {
                     text: "ANÁLISIS DE PRECIOS UNITARIOS",
                     style: 'tableHeader'
                 },
             ]
         ]

         }
     },
     ' ',
     {
         table: {
         widths: ['*',100 , 70, 90],
         body: [
            [
                 {
                 text: "ACTIVIDAD:  "+this.apuAcitivityData?.description,
                 rowSpan: 2
             }, {
                 text: "ITEM No.",
                 style: 'tableHeader'
             }
             , {
                 text: "UNIDAD:",
                 style: 'tableHeader'
             }
             , {
                 text:   this.apuAcitivityData?.unit,
             }
             
             ],
              [
                 '', {
                 text: this.apuAcitivityData?.cap
             }
             , {
                 text: "CANTIDAD",
                 style: 'tableHeader'
             }
             , {
                 text: this.apuAcitivityData?.quantity
             }
             
             ]
         ]
         }
     },
     
     ' ',
     {
         table: {
         widths: ['*',100 , 70, 100, 90],//getTableContent
         body: getTableContent()
       }
       
     },
     ' ',
     {
         table: {
         widths: [342,200 , '*'],
          body: [
                [{
             text: "",
              border: [false, false, true, false],
             },
               {
             text: "TOTAL COSTO DIRECTO",
                 style: 'tableHeader'
             },
               {
             text: "1233",
             },],
             
          ]
         }
     
     }
 ],
 styles: {
     header: {
         fontSize: 18,
         bold: true,
         margin: [0, 0, 0, 10]
     },
     subheader: {
         fontSize: 16,
         bold: true,
         margin: [0, 10, 0, 5]
     },
     tableExample: {
         margin: [0, 5, 0, 15]
     },
     tableHeader: {
         bold: true,
         fontSize: 13,
         color: 'black'
     }
 },
 
}

const pdf = pdfMake.createPdf(dd);
pdf.open();
  }


}

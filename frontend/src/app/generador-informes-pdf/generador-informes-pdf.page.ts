import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generador-informes-pdf',
  templateUrl: './generador-informes-pdf.page.html',
  styleUrls: ['./generador-informes-pdf.page.scss'],
})
export class GeneradorInformesPdfPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createPdf(){
    const pdfDefinition: any = {
      content: [
        {
          text: 'Hola mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();


  }

}

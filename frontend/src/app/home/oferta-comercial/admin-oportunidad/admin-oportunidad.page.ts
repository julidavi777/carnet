import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-oportunidad',
  templateUrl: './admin-oportunidad.page.html',
  styleUrls: ['./admin-oportunidad.page.scss'],
})
export class AdminOportunidadPage implements OnInit {

  determinacionRequisitos = '';

  documentos: any[] = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.documentos.push({
      nombre: file.name,
      tamaño: file.size
    });
  }

  constructor() { }

  ngOnInit() {


  }

}

import { Component, OnInit } from '@angular/core';
import { ApuMaterialService } from '../services/apu-material.service';

@Component({
  selector: 'app-apu-material-list',
  templateUrl: './apu-material-list.component.html',
  styleUrls: ['./apu-material-list.component.scss']
})
export class ApuMaterialListComponent implements OnInit {
  materials: any[] = [];
  loadingIndicator = true; // Variable para indicar si se está cargando

  constructor(private materialService: ApuMaterialService) { }

  ngOnInit() {
    this.loadMaterials();
  }

  loadMaterials() {
    this.materialService.getAll().subscribe(data => {
      this.materials = data;
      this.loadingIndicator = false; // Cuando se completó la carga, se desactiva el indicador
    });
  }

  deleteMaterial(id: number) {
    if (confirm('¿Estás seguro de eliminar este material?')) {
    /*   this.materialService.delete(id).subscribe(() => {
        this.loadMaterials();
      }); */
    }
  }
}
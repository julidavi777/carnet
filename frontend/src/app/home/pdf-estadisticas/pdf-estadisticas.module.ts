import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfEstadisticasPageRoutingModule } from './pdf-estadisticas-routing.module';

import { PdfEstadisticasPage } from './pdf-estadisticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfEstadisticasPageRoutingModule
  ],
  declarations: [PdfEstadisticasPage]
})
export class PdfEstadisticasPageModule {}

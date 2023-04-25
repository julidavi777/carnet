import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCotizacionPageRoutingModule } from './crear-cotizacion-routing.module';

import { CrearCotizacionPage } from './crear-cotizacion.page';
import { ButtonModule } from 'primeng/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StatusSeguimientoPipe } from './status-seguimiento.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCotizacionPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxDatatableModule
  ],
  declarations: [CrearCotizacionPage, StatusSeguimientoPipe]
})
export class CrearCotizacionPageModule {}

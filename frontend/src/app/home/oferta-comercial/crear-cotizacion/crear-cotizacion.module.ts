import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCotizacionPageRoutingModule } from './crear-cotizacion-routing.module';

import { CrearCotizacionPage } from './crear-cotizacion.page';
import { ButtonModule } from 'primeng/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCotizacionPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxDatatableModule,
    PipesModule
  ],
  declarations: [CrearCotizacionPage]
})
export class CrearCotizacionPageModule {}

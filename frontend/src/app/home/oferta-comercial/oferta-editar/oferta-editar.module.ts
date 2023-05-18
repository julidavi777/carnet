import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaEditarPageRoutingModule } from './oferta-editar-routing.module';

import { OfertaEditarPage } from './oferta-editar.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminOportunidadPageModule } from '../admin-oportunidad/admin-oportunidad.module';
import { CrearCotizacionPageModule } from '../crear-cotizacion/crear-cotizacion.module';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaEditarPageRoutingModule,
    ReactiveFormsModule,
    AdminOportunidadPageModule,
    CrearCotizacionPageModule,
    NgxCurrencyModule
  ],
  declarations: [OfertaEditarPage]
})
export class OfertaEditarPageModule {}

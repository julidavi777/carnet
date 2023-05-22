import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionesPageRoutingModule } from './cotizaciones-routing.module';

import { CotizacionesPage } from './cotizaciones.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionesPageRoutingModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxDatatableModule
  ],
  declarations: [CotizacionesPage]
})
export class CotizacionesPageModule {}

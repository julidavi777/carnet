import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CotizacionesPageRoutingModule } from './cotizaciones-routing.module';

import { CotizacionesPage } from './cotizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionesPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ToastModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [CotizacionesPage]
})
export class CotizacionesPageModule {}

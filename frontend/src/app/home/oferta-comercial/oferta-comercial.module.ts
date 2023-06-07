import { TipoContratacionPipe } from './../clientes/pipes/tipo-contratacion.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoServicioPipe } from '../clientes/pipes/tipo-servicio.pipe';
import { IonicModule } from '@ionic/angular';
import { SectorProductivoPipe } from '../clientes/pipes/sector-productivo.pipe';

import { OfertaComercialPageRoutingModule } from './oferta-comercial-routing.module';

import { OfertaComercialPage } from './oferta-comercial.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaComercialPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    NgxPermissionsModule.forChild(),
    PipesModule,
    IonicSelectableModule
  ],
  declarations: [OfertaComercialPage, TipoContratacionPipe,TipoServicioPipe,  SectorProductivoPipe  ]
})
export class OfertaComercialPageModule {}

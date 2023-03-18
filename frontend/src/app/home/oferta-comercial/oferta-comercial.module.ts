import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaComercialPageRoutingModule } from './oferta-comercial-routing.module';

import { OfertaComercialPage } from './oferta-comercial.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaComercialPageRoutingModule,
    NgxDatatableModule,
    ButtonModule
  ],
  declarations: [OfertaComercialPage]
})
export class OfertaComercialPageModule {}

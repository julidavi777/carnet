import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaComercialPageRoutingModule } from './oferta-comercial-routing.module';

import { OfertaComercialPage } from './oferta-comercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaComercialPageRoutingModule
  ],
  declarations: [OfertaComercialPage]
})
export class OfertaComercialPageModule {}

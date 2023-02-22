import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearOfertaPageRoutingModule } from './crear-oferta-routing.module';

import { CrearOfertaPage } from './crear-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearOfertaPageRoutingModule
  ],
  declarations: [CrearOfertaPage]
})
export class CrearOfertaPageModule {}

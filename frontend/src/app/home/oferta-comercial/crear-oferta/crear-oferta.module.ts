import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearOfertaPageRoutingModule } from './crear-oferta-routing.module';

import { CrearOfertaPage } from './crear-oferta.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearOfertaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearOfertaPage]
})
export class CrearOfertaPageModule {}

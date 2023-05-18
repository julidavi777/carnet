import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearOfertaPageRoutingModule } from './crear-oferta-routing.module';

import { CrearOfertaPage } from './crear-oferta.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearOfertaPageRoutingModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  declarations: [CrearOfertaPage]
})
export class CrearOfertaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaEditarPageRoutingModule } from './oferta-editar-routing.module';

import { OfertaEditarPage } from './oferta-editar.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaEditarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OfertaEditarPage]
})
export class OfertaEditarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEditarPageRoutingModule } from './cliente-editar-routing.module';

import { ClienteEditarPage } from './cliente-editar.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEditarPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [ClienteEditarPage]
})
export class ClienteEditarPageModule {}

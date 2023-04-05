import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearClientePageRoutingModule } from './crear-cliente-routing.module';

import { CrearClientePage } from './crear-cliente.page';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicSelectableModule } from 'ionic-selectable';
import { FormContactoModule } from '../components/form-contacto/form-contacto.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearClientePageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    FormContactoModule
  ],
  declarations: [CrearClientePage]
})
export class CrearClientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminOportunidadPageRoutingModule } from './admin-oportunidad-routing.module';

import { AdminOportunidadPage } from './admin-oportunidad.page';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminOportunidadPageRoutingModule,
    TableModule,
    ToggleButtonModule,
    ButtonModule,
    SelectButtonModule,
    ReactiveFormsModule
  ],
  declarations: [AdminOportunidadPage]
})
export class AdminOportunidadPageModule {}

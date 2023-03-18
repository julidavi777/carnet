import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminOportunidadPageRoutingModule } from './admin-oportunidad-routing.module';

import { AdminOportunidadPage } from './admin-oportunidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminOportunidadPageRoutingModule
  ],
  declarations: [AdminOportunidadPage]
})
export class AdminOportunidadPageModule {}

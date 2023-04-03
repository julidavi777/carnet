import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ChartModule } from 'primeng/chart';

import { InformesIndicadoresPageRoutingModule } from './informes-indicadores-routing.module';

import { InformesIndicadoresPage } from './informes-indicadores.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformesIndicadoresPageRoutingModule,
    ChartModule,
  ],
  declarations: [InformesIndicadoresPage]
})
export class InformesIndicadoresPageModule {}


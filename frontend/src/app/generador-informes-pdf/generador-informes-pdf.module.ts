import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorInformesPdfPageRoutingModule } from './generador-informes-pdf-routing.module';

import { GeneradorInformesPdfPage } from './generador-informes-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorInformesPdfPageRoutingModule
  ],
  declarations: [GeneradorInformesPdfPage]
})
export class GeneradorInformesPdfPageModule {}

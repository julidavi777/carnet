import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuPageRoutingModule } from './apu-routing.module';

import { ApuPage } from './apu.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApuPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ApuPage]
})
export class ApuPageModule {}

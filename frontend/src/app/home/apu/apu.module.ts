import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuPageRoutingModule } from './apu-routing.module';

import { ApuPage } from './apu.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {ButtonModule} from 'primeng/button';
import { SupplyApuFormComponent } from './supply-apu-form/supply-apu-form.component';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApuPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    IonicSelectableModule
  ],
  declarations: [ApuPage, SupplyApuFormComponent]
})
export class ApuPageModule {}

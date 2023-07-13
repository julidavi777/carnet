import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuPageRoutingModule } from './apu-routing.module';

import { ApuPage } from './apu.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {ButtonModule} from 'primeng/button';
import { SupplyApuFormComponent } from './supply-apu-form/supply-apu-form.component';
import { IonicSelectableModule } from 'ionic-selectable';
import {TooltipModule} from 'primeng/tooltip';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApuPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    IonicSelectableModule,
    TooltipModule
  ],
  declarations: [ApuPage, SupplyApuFormComponent]
})
export class ApuPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApuLaborPricesPageRoutingModule } from './apu-labor-prices-routing.module';
import { ApuLaborPriceFormComponent } from './apu-labor-price-form/apu-labor-price-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApuLaborPriceListComponent } from './apu-labor-price-list/apu-labor-price-list.component';
import { ButtonModule } from 'primeng/button';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApuLaborPricesPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ButtonModule,
    IonicSelectableModule,
  ],
  declarations: [
    ApuLaborPriceListComponent,
    ApuLaborPriceFormComponent
  ]
})
export class ApuLaborPricesPageModule {}

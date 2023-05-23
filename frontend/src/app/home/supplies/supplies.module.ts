import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppliesPageRoutingModule } from './supplies-routing.module';

import { SuppliesPage } from './supplies.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';
import { SupplyFormComponent } from './supply-form/supply-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliesPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  declarations: [SuppliesPage, SupplyFormComponent]
})
export class SuppliesPageModule {}

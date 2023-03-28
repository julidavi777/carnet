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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipesModule } from 'src/app/pipes/pipes.module';

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
    ReactiveFormsModule,
    NgxDatatableModule,
    PipesModule
  ],
  declarations: [AdminOportunidadPage]
})
export class AdminOportunidadPageModule {}

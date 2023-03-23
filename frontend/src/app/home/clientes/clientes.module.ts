import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TipoIdentificacionPipe } from './pipes/tipo-identificacion.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    ToastModule,
    NgxPermissionsModule.forChild()
  ],
  declarations: [ClientesPage, TipoIdentificacionPipe ]
})
export class ClientesPageModule {}

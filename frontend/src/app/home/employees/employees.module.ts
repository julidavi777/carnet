import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesPageRoutingModule } from './employees-routing.module';

import { EmployeesPage } from './employees.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';
import { NgxPermissionsModule } from 'ngx-permissions';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    NgxPermissionsModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [EmployeesPage]
})
export class EmployeesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEmployeePageRoutingModule } from './form-employees-routing.module';

import { FormEmployeePage } from './form-employees.page';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEmployeePageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [FormEmployeePage]
})
export class FormEmployeePageModule {}

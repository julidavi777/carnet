import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormUserPageRoutingModule } from './form-user-routing.module';

import { FormUserPage } from './form-user.page';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormUserPageRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [FormUserPage]
})
export class FormUserPageModule {}

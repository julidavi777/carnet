import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
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
    UsersPageRoutingModule,
    NgxDatatableModule,
    ButtonModule,
    NgxPermissionsModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}

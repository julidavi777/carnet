import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenubarModule,
    ButtonModule,
    TooltipModule,
    NgxPermissionsModule.forChild(),
    PanelMenuModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

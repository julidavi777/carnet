import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';

import { IonicModule } from '@ionic/angular';

import { GestionarProyectosPageRoutingModule } from './gestionar-proyectos-routing.module';

import { GestionarProyectosPage } from './gestionar-proyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarProyectosPageRoutingModule,
    AccordionModule
  ],
  declarations: [GestionarProyectosPage]
})
export class GestionarProyectosPageModule {}

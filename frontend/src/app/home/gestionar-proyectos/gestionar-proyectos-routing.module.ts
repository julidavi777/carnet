import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarProyectosPage } from './gestionar-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarProyectosPageRoutingModule {}

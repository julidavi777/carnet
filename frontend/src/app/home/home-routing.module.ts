import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
      },
      {
        path: 'crear-cliente',
        loadChildren: () => import('./clientes/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

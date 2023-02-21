import { CrearClientePageModule } from './home/clientes/crear-cliente/crear-cliente.module';
import { ClientesPageModule } from './home/clientes/clientes.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home',  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'clientes',
    children: [
      {
        path: "",
        loadChildren: () => import('./home/clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: "crear-cliente",
        loadChildren: () => import('./home/clientes/crear-cliente/crear-cliente.module').then(m=> m.CrearClientePageModule)
      }
    ]
  },
  {
    path: 'oferta-comercial',
    children: [
      {
        path:"",
        loadChildren: () => import('./oferta-comercial/oferta-comercial.module').then( m => m.OfertaComercialPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./oferta-comercial/ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path: 'crear-cotizacion',
        loadChildren: () => import('./oferta-comercial/crear-cotizacion/crear-cotizacion.module').then( m => m.CrearCotizacionPageModule)
      },
      {
        path: 'cotizaciones',
        loadChildren: () => import('./oferta-comercial/cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
      }

    ]

  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from '../guards/admin-access.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule),
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule),
        canActivate: [AdminAccessGuard]
      },


      {
        path: 'clientes',
        children: [
          {
            path: 'clientes-list',
            loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
          },
          {
            path: 'crear-cliente',
            loadChildren: () => import('./clientes/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
          },
          {
            path: 'cliente-editar',
            loadChildren: () => import('./clientes/cliente-editar/cliente-editar.module').then( m => m.ClienteEditarPageModule)
          }
        ]
      },
      {
        path: 'oferta-comercial',
        children: [
          {
            path: 'ofertas',
            loadChildren: () => import('./oferta-comercial/oferta-comercial.module').then( m => m.OfertaComercialPageModule)
          },
          {
            path:"crear-oferta",
            loadChildren: () => import('./oferta-comercial/crear-oferta/crear-oferta.module').then( m => m.CrearOfertaPageModule)
          },
          {
            path: 'crear-cotizacion',
            loadChildren: () => import('./oferta-comercial/crear-cotizacion/crear-cotizacion.module').then( m => m.CrearCotizacionPageModule)
          },
          {
            path: 'cotizaciones',
            loadChildren: () => import('./oferta-comercial/cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
          },

          {
            path: 'oferta-editar',
            loadChildren: () => import('./oferta-comercial/oferta-editar/oferta-editar.module').then( m => m.OfertaEditarPageModule)
          },

          {
            path: 'informes-indicadores',
            loadChildren: () => import('./informes-indicadores/informes-indicadores.module').then( m=> m.InformesIndicadoresPageModule)
          }




        ]

      },
      {
        path: 'informes-indicadores',
        loadChildren: () => import('./informes-indicadores/informes-indicadores.module').then(m => m.InformesIndicadoresPageModule)
      },
      {
        path: 'pdf-estadisticas',
        loadChildren: () => import('./pdf-estadisticas/pdf-estadisticas.module').then( m => m.PdfEstadisticasPageModule)
      },



    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

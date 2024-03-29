
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
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule),
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

      {
        path: 'cotizaciones',
        loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
      },

      {
        path: 'gestionar-proyectos',
        loadChildren: () => import('./gestionar-proyectos/gestionar-proyectos.module').then( m => m.GestionarProyectosPageModule)
      },
      {
        path: 'supplies',
        loadChildren: () => import('./supplies/supplies.module').then( m => m.SuppliesPageModule)
      },
      {
        path: 'chapters',
        loadChildren: () => import('./chapters/chapters.module').then( m => m.ChaptersPageModule)
      },
      {
        path: 'apu',
        loadChildren: () => import('./apu/apu.module').then( m => m.ApuPageModule)
      },
      {
        path: 'apu-activities',
        loadChildren: () => import('./apu-activities/apu-activities.module').then( m => m.ApuActivitiesPageModule)
      },
      {
        path: 'apu-materials',
        loadChildren: () => import('./apu-materials/apu-materials.module').then( m => m.ApuMaterialModule)
      },
      {
        path: 'apu-tools',
        loadChildren: () => import('./apu-tools/apu-tools.module').then( m => m.ApuToolsPageModule)
      },
      {
        path: 'apu-transport-prices',
        loadChildren: () => import('./apu-transport-prices/apu-transport-prices.module').then( m => m.ApuTransportPricesPageModule)
      },
      {
        path: 'apu-labor-prices',
        loadChildren: () => import('./apu-labor-prices/apu-labor-prices.module').then( m => m.ApuLaborPricesPageModule)
      },
    ]
  },
  
  






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { Pipe, PipeTransform } from '@angular/core';
import { CrearCotizacionService } from '../home/oferta-comercial/crear-cotizacion/crear-cotizacion.service';

@Pipe({
  name: 'statusSeguimiento'
})
export class StatusSeguimientoPipe implements PipeTransform {
  constructor(
    private crearCotizacionService: CrearCotizacionService,
  ){

  }
  transform(value: number, property: string): string {

    try {
      return this.crearCotizacionService.statusOptionsSeguimiento.find(e => e.value == value)[property];
    } catch (error) {
      return "";
    }
  }

}

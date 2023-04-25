import { Pipe, PipeTransform } from '@angular/core';
import { CrearCotizacionService } from './crear-cotizacion.service';

@Pipe({
  name: 'statusSeguimiento'
})
export class StatusSeguimientoPipe implements PipeTransform {
  constructor(
    private crearCotizacionService: CrearCotizacionService,
  ){

  }
  transform(value: number): string {
    return this.crearCotizacionService.statusOptionsSeguimiento.find(e => e.value == value)?.name;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoServicio'
})
export class TipoServicioPipe implements PipeTransform {

  transform(value: number): string {

    if(value == 1){
      return "Construcción"
    }

    if(value == 2){
      return "Mantenimiento"
    }

    if(value == 3){
      return "Consultoria"
    }

    if(value == 4){
      return "tipoContratacion"
    }

    return "value";

    return "null";
  }

}

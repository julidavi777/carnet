import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoIdentificacion'
})
export class TipoIdentificacionPipe implements PipeTransform {

  transform(value: number): string {

    if(value == 1){
      return "CC"
    }

    if(value == 2){
      return "NIT"
    }

    if(value == 3){
      return "CE"
    }

    return "null";
  }

}

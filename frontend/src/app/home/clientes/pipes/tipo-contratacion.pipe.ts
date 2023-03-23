import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoContratacion'
})
export class TipoContratacionPipe implements PipeTransform {

  transform(value: number): string {

    if(value == 1){
      return "Precio global fijo"
    }

    if(value == 2){
      return "Precio unitario fijo"
    }

    if(value == 3){
      return "Administración delegada"
    }

    if(value == 4){
      return "tipoContratacion"
    }

    return "value";

    return "null";
  }

}

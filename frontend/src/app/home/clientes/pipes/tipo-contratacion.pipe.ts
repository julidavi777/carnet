import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoContratacion'
})
export class TipoContratacionPipe implements PipeTransform {

  transform(value: number, other_value: string = ""): string {

    if(value == 1){
      return "Precio global fijo"
    }

    if(value == 2){
      return "Precio unitario fijo"
    }

    if(value == 3){
      return "Administración delegada"
    }

    return other_value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectorProductivo'
})
export class SectorProductivoPipe implements PipeTransform {

  transform(value: number): string {

    if(value == 1){
      return "Industrial"
    }

    if(value == 2){
      return "Logistico"
    }

    if(value == 3){
      return "Comercial"
    }

    if(value == 4){
      return "Salud/Hospitalario"
    }

    if(value == 5){
      return "Institucional"
    }


    return "value";

    return "null";
  }

}

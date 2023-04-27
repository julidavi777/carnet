import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectorProductivo'
})
export class SectorProductivoPipe implements PipeTransform {
  data = [
    { value: 1, name: "AGROPECUARIO - GANADERA" },
    { value: 2, name: "COMERCIO - HOTELERIA Y RESTAURANTES" },
    { value: 3, name: "COMUNICACIONES Y TECNOLOGIA DE INFORMACION" },
    { value: 4, name: "CONSTRUCCIÓN" },
    { value: 5, name: "EDUCACIÓN" },
    { value: 6, name: "FINANCIERO" },
    { value: 7, name: "INDUSTRIAL" },
    { value: 8, name: "MINERO - ENERGETICO - GAS Y AGUA" },
    { value: 9, name: "INDUSTRIA DE ALIMENTOS" },
    { value: 10, name: "SERVICIOS" },
    { value: 11, name: "TRANSPORTE" },
  ]
  transform(value: number, other_value: string = ""): string {

   let found_item = this.data.find(item => item.value == value);

   if(found_item){
      return found_item.name;
   }

    return other_value;
  }

}

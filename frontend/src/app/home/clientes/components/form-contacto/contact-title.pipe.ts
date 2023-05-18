import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactTitle'
})
export class ContactTitlePipe implements PipeTransform {

  transform(value: number): string {

    if(value == 1){
      return "Registre Contacto Comercial 1"
    }

    if(value == 2){
      return "Registre Contacto Comercial 2"
    }

    if(value == 3){
      return " Contacto Facturación"
    }

    if(value == 4){
      return "Contacto Pagos / Tesoreria"
    }



    return "null";
  }

}

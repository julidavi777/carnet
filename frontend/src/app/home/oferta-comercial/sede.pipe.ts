import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sede'
})
export class SedePipe implements PipeTransform {

  transform(sede_id: string, sedes: any[]): string | null {

    if(sede_id){
      return sedes.find(e => e.id == sede_id).name;
      
    }

    return null;
  }

}

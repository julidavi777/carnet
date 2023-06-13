import { Pipe, PipeTransform } from '@angular/core';
import { SeguimientosFormService } from '../seguimientos-form.service';

@Pipe({
  name: 'probability'
})
export class ProbabilityPipe implements PipeTransform {


  transform(value: string, data): string | null {
    if(value){
      return data.find(p => p.id === Number(value) ).name;
    }
    return null;
  }

}

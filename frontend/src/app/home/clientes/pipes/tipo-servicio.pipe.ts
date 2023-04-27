import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoServicio'
})
export class TipoServicioPipe implements PipeTransform {
  data = [
    { value: 1, name: "CONSULTORIAS E INTERVENTORIAS" },
    { value: 2, name: "MANTENIMIENTOS" },
    { value: 3, name: "OBRAS CIVILES" },
    { value: 4, name: "REMODELACIONES Y ADECUACIONES" },
  ]
  transform(value: number, other_value: string = ""): string {

  
    let found_item = this.data.find(item => item.value == value);

    if(found_item){
       return found_item.name;
    }
 
     return other_value;


  }

}

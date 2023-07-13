import { Pipe, PipeTransform } from '@angular/core';
import { ApuActivitiesService } from '../apu-activities.service';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  constructor(private apuActivitiesService: ApuActivitiesService){}
  
  transform(value: number): string {
    
    return this.apuActivitiesService.getUnits().find(e => e.id == value).name;
  }

}

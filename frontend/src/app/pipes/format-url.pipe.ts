import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'formatUrl'
})
export class FormatUrlPipe implements PipeTransform {
  
  STORAGE_URL: string = environment.storageUrl;

  transform(url: string): string {
    let result = url.replace("public/", "");
    return this.STORAGE_URL+result;
  }

}

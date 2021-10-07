import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/commons/interface/interface';

@Pipe({
  name: 'loremore',
})
    
export class loreMorePipe implements PipeTransform {

  transform(value: Course[], count: number): any {
    if (count < value.length) {
      return value.slice(0, count);
    } else {
      return value;
    }
  }
}

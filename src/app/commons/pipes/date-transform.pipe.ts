import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetransform',
})
    
export class dateTransformPipe implements PipeTransform {
  
  transform(value: number): string {
    if (value !== null && typeof value === 'number') {
      let hours = Math.trunc(value / 60);
      let minutes = value % 60;
      if (value > 60) {
        return `${hours} h ${minutes} m`;
      } else {
        return `${minutes} m`;
      }
    } else {
      console.log(typeof value);
      return '0 m';
    }
  }
}

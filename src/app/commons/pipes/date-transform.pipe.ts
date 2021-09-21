import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'datetransform',
})
export class dateTransformPipe implements PipeTransform {
    transform(value: number): string {
        let hours = Math.trunc(value / 60)
        let minutes = value % 60
        if (value > 60) {
            return `${hours} h ${minutes} m`
        } else {
            return `${minutes} m`
        }
    }
}

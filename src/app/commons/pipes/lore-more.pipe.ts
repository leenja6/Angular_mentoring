import { Pipe, PipeTransform } from '@angular/core'
import { loreMoreServices } from 'src/app/commons/services/lore-more.services'

@Pipe({
    name: 'loremore',
})
export class loreMorePipe implements PipeTransform {
    constructor(private loreMoreServices: loreMoreServices) {}

    transform(value: any = [], count: number): any {
        if (count < value.length) {
            return value.slice(0, count)
        } else {
            return value
        }
    }
}

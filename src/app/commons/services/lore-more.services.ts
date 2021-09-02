import { Injectable } from '@angular/core'
import { CoursesServices } from './courses.services'

@Injectable({ providedIn: 'root' })
export class loreMoreServices{
    count: number = 3
    hide:boolean = true

    constructor(private coursesServices: CoursesServices) { }

    addCount() {
        this.count = this.count + 3
        this.hideLoreMore(this.count)
    }

    hideLoreMore(count: number) {
        if (count > this.coursesServices.getFilms().value.length) {
            return this.hide = false
        }
        return this.hide = true
    }
}

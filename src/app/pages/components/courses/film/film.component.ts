import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Courses } from 'src/app/commons/interface/interface'
import { CoursesServices } from 'src/app/commons/services/courses.services'

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
})
export class FilmComponent {
    @Input()
    film!: Courses

    @Output() getDel: EventEmitter<Courses> = new EventEmitter<Courses>()

    constructor(private coursesServices: CoursesServices) {}

    getDeleteFilm(item: any) {
        this.coursesServices.DeleteFilm(item.id)
    }
}

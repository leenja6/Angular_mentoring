import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Course } from 'src/app/commons/interface/interface'
import { CoursesServices } from 'src/app/commons/services/courses.services'

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
})
export class FilmComponent {
    @Input()
    film!: Course

    @Output() getDel: EventEmitter<Course> = new EventEmitter<Course>()

    constructor(private coursesServices: CoursesServices) {}

    getDeleteFilm(item: any) {
        this.coursesServices.DeleteFilm(item.id)
    }
}

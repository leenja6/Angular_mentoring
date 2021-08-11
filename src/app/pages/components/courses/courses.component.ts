import { Component, OnInit } from '@angular/core'
import { Courses } from 'src/app/commons/interface/interface'
import { CoursesServices } from 'src/app/commons/services/courses.services'

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
    filmList: Courses[] = []

    ngOnInit() {
        this.coursesServices.fetchFilm()
    }

    constructor(public coursesServices: CoursesServices) {}
}

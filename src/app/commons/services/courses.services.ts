import { Course } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { Subject } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class CoursesServices {
    filmList$: Subject<Course[]> = new Subject()

    constructor(private fetchCourses: DataServices) {}

    fetchFilm() {
        this.fetchCourses
            .fetchCourses()
            .pipe(filter((x) => x !== null))
            .subscribe((film) => {
                this.filmList$.next(film.slice(0, 3))
            })
    }

    getFilms() {
        return this.filmList$
    }

    DeleteFilm(id: Course) {
        this.fetchCourses
            .deleteCourses(id)
            .pipe(
                switchMap(async () => {
                    this.fetchFilm()
                })
            )
            .subscribe()
    }
}

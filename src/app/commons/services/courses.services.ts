import { Courses } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { Observable, of, Subject } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class CoursesServices {
    filmList$: Subject<Courses[]> = new Subject()

    constructor(private fetchCourses: DataServices) {}

    fetchFilm() {
        this.fetchCourses
            .fetchCourses()
            .pipe()
            .subscribe((film) => {
                this.filmList$.next(film.slice(0, 3))
            })
    }

    getFilms() {
        return this.filmList$
    }

    DeleteFilm(id: Courses) {
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
function film(film: any): any {
    throw new Error('Function not implemented.')
}

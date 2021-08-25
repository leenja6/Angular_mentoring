import { Course } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class CoursesServices {
    filmList$: BehaviorSubject<any> = new BehaviorSubject([])

    constructor(private fetchCourses: DataServices) {}

    fetchFilm() {
        this.fetchCourses
            .fetchCourses()
            .pipe()
            .subscribe((film) => {
                this.filmList$.next(film)
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

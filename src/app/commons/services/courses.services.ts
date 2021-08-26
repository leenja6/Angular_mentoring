import { Course } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { Subject } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class CoursesServices {
    filmList$: Subject<Course[]> = new Subject()

    constructor(private fetchCourses: DataServices, private router: Router) {}

    error = false

    fetchFilm() {
        this.fetchCourses
            .fetchCourses()
            .pipe(filter((x) => x !== null))
            .subscribe((film) => {
                this.filmList$.next(film)
            })
    }

    getFilms() {
        return this.filmList$
    }

    Addfilm(obj: any) {
        this.fetchCourses.addCourse(obj).subscribe(
            () => {
                this.fetchFilm()
                this.router.navigate(['/'])
            },
            (errors) => {
                console.log(errors)
                this.error = true
                setTimeout(() => (this.error = false), 3000)
            }
        )
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

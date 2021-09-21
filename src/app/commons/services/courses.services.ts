import { Course } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { BehaviorSubject } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class CoursesServices {
    filmList$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([])
    constructor(private fetchCourses: DataServices, private router: Router) {}
    error = false

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

    Addfilm(obj: Course) {
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

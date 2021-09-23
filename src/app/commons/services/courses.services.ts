import { Course } from '../interface/interface'
import { Injectable } from '@angular/core'
import { DataServices } from './data.services'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ModalServices } from './modal.services'

@Injectable({ providedIn: 'root' })
    
export class CoursesServices {
    filmList$: BehaviorSubject<any> = new BehaviorSubject([])

    constructor(private fetchCourses: DataServices, private modal: ModalServices, private router: Router) {}
    
    errorTitle: string = ''
    
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

    Patchfilm(obj: Course, id: number) {
        this.fetchCourses
            .PatchCourse(obj, id)
            .subscribe(() => {            
                this.fetchFilm()
                this.modal.closeModal()
            },
            (errors) => {
                console.log(errors)
                this.error = true
                this.errorTitle = 'Не удалось изменить курс'
                setTimeout(() => (this.error = false), 3000)
            }
        )
    }

   

    Addfilm(obj: Course) {
        this.fetchCourses
            .addCourse(obj)
            .subscribe(() => {
                this.fetchFilm()
                this.router.navigate(['/'])
            },
            (errors) => {
                console.log(errors)
                this.error = true
                this.errorTitle = 'Не удалось добавить курс'
                setTimeout(() => (this.error = false), 3000)
            }
        )
    }

    DeleteFilm(id: number) {
        this.fetchCourses
            .deleteCourses(id)
            .pipe(
                switchMap(async () => {
                    this.fetchFilm()
                })
            )
            .subscribe(() => {
                this.modal.closeModal()
            },
            (errors) => {
                console.log(errors)
                this.error = true
                this.errorTitle = 'Не удалось удалить курс'
                setTimeout(() => (this.error = false), 3000)
            })
    }
}

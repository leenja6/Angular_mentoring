import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Course } from 'src/app/commons/interface/interface'

@Component({
    selector: 'app-btn-edit-delete-courses',
    templateUrl: './btn-edit-delete-courses.component.html',
})
export class BtnEditDeleteCoursesComponent {
    @Input()
    filmItem!: Course

    @Output() deleteFilm: EventEmitter<Course> = new EventEmitter<Course>()

    deletePost(item: Course) {
        this.deleteFilm.emit(item)
    }
}

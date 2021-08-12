import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Courses } from 'src/app/commons/interface/interface'

@Component({
    selector: 'app-btn-edit-delete-courses',
    templateUrl: './btn-edit-delete-courses.component.html',
})
export class BtnEditDeleteCoursesComponent {
    @Input()
    filmItem!: Courses

    @Output() deleteFilm: EventEmitter<Courses> = new EventEmitter<Courses>()

    deletePost(item: Courses) {
        this.deleteFilm.emit(item)
    }
}

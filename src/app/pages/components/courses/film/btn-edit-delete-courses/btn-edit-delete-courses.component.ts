import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Film } from 'src/app/commons/interface/interface'

@Component({
    selector: 'app-btn-edit-delete-courses',
    templateUrl: './btn-edit-delete-courses.component.html',
})
export class BtnEditDeleteCoursesComponent {
    @Input()
    filmItem!: Film

    @Output() deleteFilm: EventEmitter<Film> = new EventEmitter<Film>()

    deletePost(item: Film) {
        this.deleteFilm.emit(item)
    }
}

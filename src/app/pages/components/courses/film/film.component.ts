import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Film } from 'src/app/commons/interface/interface'

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
})
export class FilmComponent {
    @Input()
    film!: Film

    @Output() getDel: EventEmitter<Film> = new EventEmitter<Film>()

    getDeleteFilm(item: Film) {
        this.getDel.emit(item)
    }
}

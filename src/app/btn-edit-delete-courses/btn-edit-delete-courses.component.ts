import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../courses/courses.component';

@Component({
  selector: 'app-btn-edit-delete-courses',
  templateUrl: './btn-edit-delete-courses.component.html',
})
  
export class BtnEditDeleteCoursesComponent {

  @Input()
    filmItem!: Film

  @Output() deleteFilm:EventEmitter<Film> = new EventEmitter<Film>()
  
  deletePost(item: Film) {
    this.deleteFilm.emit(item)
  }

}

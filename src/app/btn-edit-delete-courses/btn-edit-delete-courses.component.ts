import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../courses/courses.component';

@Component({
  selector: 'app-btn-edit-delete-courses',
  templateUrl: './btn-edit-delete-courses.component.html',
  styleUrls: ['./btn-edit-delete-courses.component.scss']
})
export class BtnEditDeleteCoursesComponent implements OnInit {

  @Input()
    filmitem!: Film

  @Output() deleteFilm:EventEmitter<Film> = new EventEmitter<Film>()
  
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(item: Film) {
    this.deleteFilm.emit(item)
  }

}

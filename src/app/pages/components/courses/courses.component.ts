import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/commons/interface/interface';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { loreMoreServices } from 'src/app/commons/services/lore-more.services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  filmList: Course[] = [];

  ngOnInit() {
    this.coursesServices.fetchFilm();
  }

  constructor(
    public coursesServices: CoursesServices,
    public LoreMoreServices: loreMoreServices,
  ) {}
}

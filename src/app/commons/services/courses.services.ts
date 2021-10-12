import { Course } from '../interface/interface';
import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
    
export class CoursesServices {

  filmList$:BehaviorSubject<any> = new BehaviorSubject([]);
    
  closeModal$: Subject<any> = new Subject();

  constructor(private fetchCourses: DataServices, private router: Router) {}
    
  errorTitle: string = '';
    
  error = false;
    
  coursesObj: Course = {
    id: -1,
    name: '',
    date: '',
    length: null,
    description: '',
    authors: [{ lastName: '', id: 0, name: '' }],
    isTopRated: false,
  };
    
  filmFormDelete() {
    this.coursesObj = {
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    };
  }

  filmFormAdd(obj: Course) {
    this.coursesObj = obj;
  }

  fetchFilm() {
    this.fetchCourses
      .fetchCourses()
      .pipe()
      .subscribe((film) => {
        this.filmList$.next(film);
        this.closeModal$.next();
      });
  }

  getFilms() {
    return this.filmList$;
  }

  Patchfilm(obj: Course, id: number) {
    this.fetchCourses
      .PatchCourse(obj, id)
      .subscribe(() => {            
        this.fetchFilm();
      },
      (errors) => {
        console.log(errors);
        this.error = true;
        this.errorTitle = 'Не удалось изменить курс';
        setTimeout(() => (this.error = false), 3000);
      });
  }

  Addfilm(obj: Course) {
    this.fetchCourses
      .addCourse(obj)
      .subscribe(() => {
        this.fetchFilm();
        this.router.navigate(['/']);
      },
      (errors) => {
        console.log(errors);
        this.error = true;
        this.errorTitle = 'Не удалось добавить курс';
        setTimeout(() => (this.error = false), 3000);
      });
  }

  DeleteFilm(id: number) {
    this.fetchCourses
      .deleteCourses(id)
      .pipe(
        switchMap(async () => {
          this.fetchFilm();                    
        }),
      )
      .subscribe(() => {
        this.closeModal$.next();
      },
      (errors) => {
        console.log(errors);
        this.error = true;
        this.errorTitle = 'Не удалось удалить курс';
        setTimeout(() => (this.error = false), 3000);
      });
  }
}

import { EMPTY, of, throwError } from 'rxjs';
import { CoursesComponent } from 'src/app/pages/components/courses/courses.component';
import { Course } from '../interface/interface';
import { CoursesServices } from './courses.services';
import { DataServices } from './data.services';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { loreMorePipe } from '../pipes/lore-more.pipe';

describe('fieldErrorsServices', () => {

  let fixture: ComponentFixture<CoursesComponent>;
  let coursesServices: CoursesServices;
  let dataServices: DataServices;
  let coursesComponent: CoursesComponent;
  let course: Course[];
  let course2: Course;
          
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent, loreMorePipe],
      providers: [CoursesServices, DataServices],
      imports: [AppRoutingModule, HttpClientModule],
    });
    
    coursesServices = TestBed.inject(CoursesServices);
    dataServices = TestBed.inject(DataServices);
      
    fixture = TestBed.createComponent(CoursesComponent);
    coursesComponent = fixture.componentInstance;
  });
  
  it('Вызывается ли метод fetchFilm в компоненте coursesComponent', () => {
    const spy = spyOn(coursesServices, 'fetchFilm').and.callFake(() => {
      return EMPTY;
    });
    coursesComponent.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
    
  it('Идет ли загрузка фильмов методом fetchFilm', () => {
    course = [{
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    }];
    spyOn(dataServices, 'fetchCourses').and.callFake(() => {
      return of(course);
    });
    coursesComponent.ngOnInit();
    expect(coursesServices.getFilms().value.length).toBe(1);
  });
  
  it('Проверка вызова метода filmFormAdd', () => {
    course2 = {
      id: 2,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    };
    coursesServices.filmFormAdd(course2);
    expect(coursesServices.coursesObj.id).toBe(2);
  });
    
  it('Проверка вызова метода filmFormDelete', () => {
    coursesServices.filmFormDelete();
    expect(coursesServices.coursesObj.id).toBe(-1);
  });
    
  it('Проверка вызова метода Patchfilm', () => {
    course = [{
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    }];
        
    spyOn(dataServices, 'PatchCourse').and.callFake(() => {
      return of(course);
    });
    spyOn(dataServices, 'fetchCourses').and.callFake(() => {
      return of(course);
    });
    coursesServices.Patchfilm(course2, 5);
    expect(coursesServices.getFilms().value.length).toBe(1);
  });

  it('При вызове метода PatchCourse вызовет ошибку', () => {
    const error = 'Не удалось добавить курс';
    spyOn(dataServices, 'PatchCourse').and.returnValue(throwError(error));
    coursesServices.Patchfilm(course2, 5);
    expect(coursesServices.errorTitle).toBe('Не удалось изменить курс');
     
  });
  
  it('Проверка вызова метода Addfilm', () => {
    course = [{
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    }];
        
    spyOn(dataServices, 'addCourse').and.callFake(() => {
      return of(course);
    });
    spyOn(dataServices, 'fetchCourses').and.callFake(() => {
      return of(course);
    });
    coursesServices.Addfilm(course2);
    expect(coursesServices.getFilms().value.length).toBe(1);
  });
    
  it('При вызове метода Addfilm вызовет ошибку', () => {
    const error = 'Не удалось добавить курс';
    spyOn(dataServices, 'addCourse').and.returnValue(throwError(error));
    coursesServices.Addfilm(course2);
    expect(coursesServices.errorTitle).toBe('Не удалось добавить курс');
     
  });
  
  it('Проверка вызова метода DeleteFilm', () => {
    course = [{
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    }];
      
    spyOn(dataServices, 'deleteCourses').and.callFake(() => {
      return of(course);
    });
    spyOn(dataServices, 'fetchCourses').and.callFake(() => {
      return of(course);
    });
    coursesServices.DeleteFilm(2);
    expect(coursesServices.getFilms().value.length).toBe(1);
  });
    
  it('При вызове метода DeleteFilm вызовет ошибку', () => {
    const error = 'Не удалось удалить курс';
    spyOn(dataServices, 'deleteCourses').and.returnValue(throwError(error));
    coursesServices.DeleteFilm(2);
    expect(coursesServices.errorTitle).toBe('Не удалось удалить курс');
  });
});

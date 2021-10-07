import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EMPTY } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { DataServices } from 'src/app/commons/services/data.services';
import { FilmComponent } from './film.component';

describe('FilmComponent', () => {
 
  let appFilm: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;
  let dataServices: DataServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmComponent],
      providers: [CoursesServices, DataServices],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    dataServices = TestBed.inject(DataServices);
    fixture = TestBed.createComponent(FilmComponent);
    appFilm = fixture.componentInstance;
  });
  
  it('Создание компонента appFilm', () => {
    expect(appFilm).toBeDefined();
  });

  it('Запускается ли сервис по удалению курса с передаваемым id', () => {
    const spy = spyOn(dataServices, 'deleteCourses').and.returnValue(EMPTY);
    
    appFilm.getDeleteFilm(3);

    expect(spy).toHaveBeenCalled();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { AddCoursesComponent } from './add-courses.component';

describe('AddCoursesComponent', () => {
 
  let appAddCourses: AddCoursesComponent;
  let fixture: ComponentFixture<AddCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoursesComponent],
      providers: [CoursesServices],
      imports:[HttpClientModule, AppRoutingModule],
    });
    
    fixture = TestBed.createComponent(AddCoursesComponent);
    appAddCourses = fixture.componentInstance;
  });
  
  it('Создание компонента appAddCourses', () => {
    expect(appAddCourses).toBeDefined();
  });
});

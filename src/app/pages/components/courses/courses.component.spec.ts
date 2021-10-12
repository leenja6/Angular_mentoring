import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonsModule } from 'src/app/commons/commons.module';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
 
  let appCourses: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      providers: [CoursesServices],
      imports: [HttpClientModule, AppRoutingModule, CommonsModule],
    });
    
    fixture = TestBed.createComponent(CoursesComponent);
    appCourses = fixture.componentInstance;
  });
  
  it('Создание компонента appCourses', () => {
    expect(appCourses).toBeDefined();
  });
});

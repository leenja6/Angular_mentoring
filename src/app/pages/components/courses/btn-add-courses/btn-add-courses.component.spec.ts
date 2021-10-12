import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnAddCoursesComponent } from './btn-add-courses.component';

describe('BtnAddCoursesComponent', () => {
 
  let appBtnAddCourses: BtnAddCoursesComponent;
  let fixture: ComponentFixture<BtnAddCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnAddCoursesComponent],
    });
    
    fixture = TestBed.createComponent(BtnAddCoursesComponent);
    appBtnAddCourses = fixture.componentInstance;
  });
  
  it('Создание компонента appBtnAddCourses', () => {
    expect(appBtnAddCourses).toBeDefined();
  });
});

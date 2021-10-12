import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from 'src/app/commons/interface/interface';
import { OverlayServices } from 'src/app/modals/services/overlay.services';
import { BtnEditDeleteCoursesComponent } from './btn-edit-delete-courses.component';

describe('BtnEditDeleteCoursesComponent', () => {
 
  let coursesObj: Course;
  let appBtnEditDeleteCourses: BtnEditDeleteCoursesComponent;
  let fixture: ComponentFixture<BtnEditDeleteCoursesComponent>;
  let overlayServices: OverlayServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnEditDeleteCoursesComponent],
      providers:[OverlayServices],
    });
    
    overlayServices = TestBed.inject(OverlayServices);
    fixture = TestBed.createComponent(BtnEditDeleteCoursesComponent);
    appBtnEditDeleteCourses = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Создание компонента appBtnEditDeleteCourses', () => {
    expect(appBtnEditDeleteCourses).toBeDefined();
  });
  
  it('Передача данных для создания компонента редактирования в модельном окне', () => {
    const spy = spyOn(overlayServices, 'showPopup').and.callFake(() => {
      return 'тест';
    });
    
    appBtnEditDeleteCourses.editFilmItem(coursesObj);

    expect(spy).toHaveBeenCalled();
  });

  it('Передача данных для создания компонента удаления в модельном окне', () => {
    const spy = spyOn(overlayServices, 'showPopup').and.callFake(() => {
      return 'тест';
    });
    
    appBtnEditDeleteCourses.deleteFilmItem(coursesObj);

    expect(spy).toHaveBeenCalled();
  });
});

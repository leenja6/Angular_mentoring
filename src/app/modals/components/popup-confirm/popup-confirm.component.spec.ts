import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { DataServices } from 'src/app/commons/services/data.services';
import { OverlayContainerComponent } from '../overlay-container/overlay-container.component';
import { PopupConfirmComponent } from './popup-confirm.component';

describe('PopupConfirmComponent', () => {
 
  let appPopupConfirm: PopupConfirmComponent;
  let fixture: ComponentFixture<PopupConfirmComponent>;
  let coursesServices: CoursesServices;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConfirmComponent],
      providers: [CoursesServices],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    coursesServices = TestBed.inject(CoursesServices);
    fixture = TestBed.createComponent(PopupConfirmComponent);
    appPopupConfirm = fixture.componentInstance;
  });
   
  it('Создание компонента appPopupConfirm', () => {
    expect(appPopupConfirm).toBeDefined();
  });

  it('Вызывается ли метод Cancel', () => {
    appPopupConfirm.Cancel();

    expect(coursesServices.closeModal$.observers).toEqual([]);
  });

  it('Проверка метода DeleteFilm', () => {
    const spy = spyOn(coursesServices, 'DeleteFilm').and.returnValue();
    appPopupConfirm.DeleteFilm();
    expect(spy).toHaveBeenCalled();
  });
});

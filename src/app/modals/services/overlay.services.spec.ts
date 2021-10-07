import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Course } from 'src/app/commons/interface/interface';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { OverlayContainerComponent } from '../components/overlay-container/overlay-container.component';
import { PopupEditComponent } from '../components/popup-edit/popup-edit.component';
import { overlayInterface } from '../interface/overlayInterface';
import { OverlayServices } from './overlay.services';

describe('fieldErrorsServices', () => {

  let fixture: ComponentFixture<OverlayContainerComponent>;
  let overlayContainerComponent: OverlayContainerComponent;
  let overlayServices: OverlayServices;
  let component: overlayInterface;
  let course: Course;  
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayContainerComponent],
      providers: [OverlayServices, CoursesServices],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    overlayServices = TestBed.inject(OverlayServices);
    fixture = TestBed.createComponent(OverlayContainerComponent);
    overlayContainerComponent = fixture.componentInstance;
  });
    
  it('Передает ли метод данные для открытия модульного окна', () => {
    component = { title: PopupEditComponent, course: course }; 
    const spy = spyOn(overlayContainerComponent, 'ShowModal').and.returnValue();
    overlayContainerComponent.ngOnInit();
    overlayServices.showPopup(component);  
    console.log(overlayServices.showPopup(component));
    expect(spy).toHaveBeenCalled();
  });
});
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesServices } from 'src/app/commons/services/courses.services';
import { OverlayServices } from '../../services/overlay.services';
import { OverlayContainerComponent } from '../overlay-container/overlay-container.component';
import { PopupConfirmComponent } from '../popup-confirm/popup-confirm.component';
import { PopupEditComponent } from '../popup-edit/popup-edit.component';

describe('OverlayContainerComponent', () => {
 
  let appOverlay: OverlayContainerComponent;
  let fixture: ComponentFixture<OverlayContainerComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayContainerComponent],
      providers: [OverlayServices, CoursesServices],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    fixture = TestBed.createComponent(OverlayContainerComponent);
    appOverlay = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Создание компонента appOverlay', () => {
    expect(appOverlay).toBeDefined();
  });
  
  it('Открытие модeльного окна', () => {
    const entryComponents = {
      Edit: PopupEditComponent,
      Confirm: PopupConfirmComponent,
    };
    appOverlay.ShowModal({ title: entryComponents.Edit });
    expect(appOverlay.showOverlay).toBeTruthy();
  });

  it('Закрытие модульного окна', () => {
    appOverlay.closeModal();
    expect(appOverlay.showOverlay).toBeFalse();
  });
});

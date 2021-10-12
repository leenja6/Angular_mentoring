import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupEditComponent } from './popup-edit.component';

describe('PopupEditComponent', () => {
 
  let appPopupEdit: PopupEditComponent;
  let fixture: ComponentFixture<PopupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupEditComponent],
    });
    
    fixture = TestBed.createComponent(PopupEditComponent);
    appPopupEdit = fixture.componentInstance;
  });
  
  it('Создание компонента appPopupEdit', () => {
    expect(appPopupEdit).toBeDefined();
  });
});

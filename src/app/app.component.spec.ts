import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
 
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
    
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });
  
  it('Создание компонента', () => {
    expect(appComponent).toBeDefined();
  });
    
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mainLayoutComponent } from '../components/main.layout.component';

describe('mainLayoutComponent', () => {
 
  let appMainLayout: mainLayoutComponent;
  let fixture: ComponentFixture<mainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [mainLayoutComponent],
    });
    
    fixture = TestBed.createComponent(mainLayoutComponent);
    appMainLayout = fixture.componentInstance;
  });
  
  xit('Создание компонента appMainLayout', () => {
    expect(appMainLayout).toBeDefined();
  });
});

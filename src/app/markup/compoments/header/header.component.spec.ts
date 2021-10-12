import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
 
  let appHeader: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    
    fixture = TestBed.createComponent(HeaderComponent);
    appHeader = fixture.componentInstance;
  });
  
  it('Создание компонента appHeader', () => {
    expect(appHeader).toBeDefined();
  });
});

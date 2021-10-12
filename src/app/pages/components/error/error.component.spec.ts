import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
 
  let appError: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
    });
    
    fixture = TestBed.createComponent(ErrorComponent);
    appError = fixture.componentInstance;
  });
  
  it('Создание компонента appError', () => {
    expect(appError).toBeDefined();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer/footer.component';

describe('FooterComponent', () => {
 
  let appFooter: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    
    fixture = TestBed.createComponent(FooterComponent);
    appFooter = fixture.componentInstance;
  });
  
  it('Создание компонента appFooter', () => {
    expect(appFooter).toBeDefined();
  });
});

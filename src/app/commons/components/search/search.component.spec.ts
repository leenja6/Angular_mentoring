import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search/search.component';

describe('SearchComponent', () => {
 
  let appSearch: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
    });
    
    fixture = TestBed.createComponent(SearchComponent);
    appSearch = fixture.componentInstance;
  });
  
  it('Создание компонента appSearch', () => {
    expect(appSearch).toBeDefined();
  });
});

import { loreMoreServices } from './lore-more.services';
import { CoursesServices } from '../services/courses.services';
import { DataServices } from './data.services';
import { Router } from '@angular/router';

describe('loreMoreServices', () => {

  let LoreMoreServices: loreMoreServices;
  let coursesServices: CoursesServices;
  let dataServices: DataServices;
  let router:Router;
    
  beforeEach(() => {
    coursesServices =  new  CoursesServices(dataServices, router);
    LoreMoreServices = new loreMoreServices(coursesServices);
  });
    
  it('Метод addCount увеличивает count на 3', () => {
    
    LoreMoreServices.addCount();
          
    expect(LoreMoreServices.count).toBe(6);
  });
    
  it('Метод addCount вызывает метод hideLoreMore', () => {
    
    const spy = spyOn(LoreMoreServices, 'hideLoreMore').and.callFake(() => {
      return false;   
    });
      
    LoreMoreServices.addCount();
          
    expect(spy).toHaveBeenCalled();
  });
  
  it('Метод hideLoreMore присваивает переменной hide=false если count больше длинны масива', () => {
    LoreMoreServices.hideLoreMore(3);
    expect(LoreMoreServices.hide).toBeFalse();  
  });
    
  it('Метод hideLoreMore присваивает переменной hide=true если count меньше длинны масива', () => {
    const arr = [{
      id: -1,
      name: '',
      date: '',
      length: null,
      description: '',
      authors: [{ lastName: '', id: 0, name: '' }],
      isTopRated: false,
    }];
    coursesServices.getFilms().next(arr);
      
    LoreMoreServices.hideLoreMore(0);
    expect(LoreMoreServices.hide).toBeTruthy();  
  }); 
});
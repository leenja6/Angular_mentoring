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
    // Начальный count = 3
    expect(LoreMoreServices.count).toBe(3);
    LoreMoreServices.addCount();
    // После добовления метода addCount count = 6
    expect(LoreMoreServices.count).toBe(6);
  });
    
  it('Метод addCount вызывает метод hideLoreMore', () => {
    
    const spy = spyOn(LoreMoreServices, 'hideLoreMore');
      
    LoreMoreServices.addCount();
          
    expect(spy).toHaveBeenCalled();
  });
  
  it('Метод hideLoreMore присваивает переменной hide=false если count больше длинны масива', () => {
    // Значение hide до вызова метода hideLoreMore равно true
    expect(LoreMoreServices.hide).toBeTruthy();
    LoreMoreServices.hideLoreMore(3);
    // Значение hide после вызова метода hideLoreMore равно false
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
    // count = 0
    const count = 0;
    coursesServices.filmList$.next(arr);
    // длинна масива курсов = 1
    expect(coursesServices.getFilms().value.length === 1).toBeTruthy();
    LoreMoreServices.hideLoreMore(count);
  }); 
});

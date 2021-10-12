import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddBorderDirective } from './addBorder.directive';

@Component({
  template: `
        <p appAddBorder= "2018-04-30"></p>
        <p appAddBorder="2016-04-30"></p>
    `,
})
class HostComponent {}

describe('addBorder', () => {
  
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBorderDirective, HostComponent],
    });
      
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });
    
  it('Деректива addBorder создана', () => {
    let ref!: ElementRef;   
    let r!: Renderer2;
    
    const addBorder = new AddBorderDirective(ref, r);
    expect(addBorder).toBeTruthy();
    
  });
  
  it('Если дата >=2017 Добовляется класс green', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.classList.value).toBe('green');
  });
    
  it('Если дата <=2017 класс не добавляется', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(de.nativeElement.classList.value).toBe('');
  });  

});

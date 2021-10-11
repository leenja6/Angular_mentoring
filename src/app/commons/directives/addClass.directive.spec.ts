import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddClassDirective } from './addClass.directive';

@Component({
  template: `
        <p [appAddClass]= 'true'></p>
        <p [appAddClass]='false'></p>
    `,
})
class HostComponent { }

describe('AddClassDirective', () => {
  
  let fixture: ComponentFixture<HostComponent>;
  
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClassDirective, HostComponent],
    });
      
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    console.log(fixture.debugElement.queryAll(By.css('p'))[1].nativeElement.classList.value);
  });
    
  it('Деректива addClass создана', () => {
    let ref!: ElementRef;   
    let r!: Renderer2;
    
    const addClass = new AddClassDirective(ref, r);
    expect(addClass).toBeTruthy();
    
  });
    
  it('Если true Добовляется класс active', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.classList).toContain('active');
  });

  it('Если false класс не добавляется', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    expect(de.nativeElement.classList).toContain('noactive');
  });
});

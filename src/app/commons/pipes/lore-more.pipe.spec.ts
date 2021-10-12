import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { loreMorePipe } from './lore-more.pipe';

@Component({
  template: `
       <p>{{[1,2,3,4] | loremore:2}}</p>
       <p>{{[1,2,3,4] | loremore:6}}</p>
    `,
})
class HostComponent {}

describe('loreMorePipe', () => {
  
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loreMorePipe, HostComponent],
    });
      
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });
    
  it('Пайп loreMore создан', () => {
    const loreMore = new loreMorePipe();
    expect(loreMore).toBeTruthy();
  });
  it('Если значение передаваемое пайпу меньше длины масива то длина масива становится длинной значения', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[0].nativeNode.innerText;  
    expect(de).toBe('1,2');
  });
  it('Если значение передаваемое пайпу больше длины масива то выводится весь масив', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[1].nativeNode.innerText;  
    expect(de).toBe('1,2,3,4');
  });  
});

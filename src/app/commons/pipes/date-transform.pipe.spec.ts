import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dateTransformPipe } from './date-transform.pipe';

@Component({
  template: `
        <p>{{50 | datetransform}}</p>
        <p>{{70 | datetransform}}</p>
        <p>{{null | datetransform}}</p>
        <p>{{seven | datetransform}}</p>
        <p>{{'' | datetransform}}</p>
    `,
})
class HostComponent {}

describe('dateTransformPipe', () => {
  
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dateTransformPipe, HostComponent],
    });
      
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
          
  });
    
  it('Пайп dateTransform создан', () => {
    const dateTransform = new dateTransformPipe();
    expect(dateTransform).toBeTruthy();
    
  });
    
  it('Если число меньше 60 то показывается только минуты', () => {
    const de = fixture.debugElement.children[0].nativeNode.innerText;
    expect(de).toBe('50 m');
  });
    
  it('Если число больше 60 то показываются часы и минуты', () => {
    const de = fixture.debugElement.children[1].nativeNode.innerText;
    expect(de).toBe('1 h 10 m');
  });
  
  it('Если число будет null или тип переменной отличной от number то показываются 0m', () => {
    const dateTransform = new dateTransformPipe();
    const de = fixture.debugElement.children[2].nativeNode.innerText;
    const de2 = fixture.debugElement.children[3].nativeNode.innerText;
    const de3 = fixture.debugElement.children[4].nativeNode.innerText;
    expect(de).toBe('0 m');
    expect(de2).toBe('0 m');
    expect(de3).toBe('0 m');
  });
});

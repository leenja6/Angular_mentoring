import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dateTransformPipe } from './date-transform.pipe';

@Component({
  template: `
        <p>{{50 | datetransform}}</p>
        <p>{{70 | datetransform}}</p>
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
});

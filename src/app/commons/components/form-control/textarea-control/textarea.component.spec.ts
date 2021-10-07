import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { TextareaComponent } from '../textarea-control/textarea.component';

describe('TextareaComponent', () => {
 
  let appTextarea: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let control: AbstractControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaComponent],
    });
    
    fixture = TestBed.createComponent(TextareaComponent);
    appTextarea = fixture.componentInstance;
  });
  
  it('Создание компонента appTextarea', () => {
    expect(appTextarea).toBeDefined();
  });
  it('Выполняется ли метод writeValue', () => {
    appTextarea.writeValue('text');
    expect(appTextarea.value).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appTextarea.registerOnChange('text');
    expect(appTextarea.onChange).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appTextarea.registerOnTouched('text');
    expect(appTextarea.errorAdd).toBeFalse();
  });
  it('Выполняется ли метод onChange', () => {
    appTextarea.onTouched();
    expect(appTextarea.errorAdd).toBeTruthy();
  });
  it('Выполняется ли метод validate', () => {
    const valid = appTextarea.validate(control);
    expect(valid).toEqual(null);
  });
});  

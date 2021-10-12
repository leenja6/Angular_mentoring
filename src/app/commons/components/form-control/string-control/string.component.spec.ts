import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { StringComponent } from '../string-control/string.component';

describe('StringComponent', () => {
 
  let appString: StringComponent;
  let fixture: ComponentFixture<StringComponent>;
  let control: AbstractControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringComponent],
    });
    
    fixture = TestBed.createComponent(StringComponent);
    appString = fixture.componentInstance;
  });
  
  it('Создание компонента appString', () => {
    expect(appString).toBeDefined();
  });
  it('Выполняется ли метод writeValue', () => {
    appString.writeValue('text');
    expect(appString.value).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appString.registerOnChange('text');
    expect(appString.onChange).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appString.registerOnTouched('text');
    expect(appString.errorAdd).toBeFalse();
  });
  it('Выполняется ли метод onChange', () => {
    appString.onTouched();
    expect(appString.errorAdd).toBeTruthy();
  });
  it('Выполняется ли метод validate', () => {
    const valid = appString.validate(control);
    expect(valid).toEqual(null);
  });
});

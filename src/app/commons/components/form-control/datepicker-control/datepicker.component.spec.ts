import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';
import { DatepickerComponent } from '../datepicker-control/datepicker.component';

describe('DatepickerComponent', () => {
 
  let appdatepicker: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  let control: AbstractControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
    });
    
    fixture = TestBed.createComponent(DatepickerComponent);
    appdatepicker = fixture.componentInstance;
  });
  
  it('Создание компонента appdatepicker', () => {
    expect(appdatepicker).toBeDefined();
  });

  it('Выполняется ли метод writeValue', () => {
    appdatepicker.writeValue('text');
    expect(appdatepicker.value).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appdatepicker.registerOnChange('text');
    expect(appdatepicker.onChange).toBe('text');
  });
  it('Выполняется ли метод registerOnChange', () => {
    appdatepicker.registerOnTouched('text');
    expect(appdatepicker.errorAdd).toBeFalse();
  });
  it('Выполняется ли метод onChange', () => {
    appdatepicker.onTouched();
    expect(appdatepicker.errorAdd).toBeTruthy();
  });
  it('Выполняется ли метод validate', () => {
    const valid = appdatepicker.validate(control);
    expect(valid).toEqual(null);
  });
});

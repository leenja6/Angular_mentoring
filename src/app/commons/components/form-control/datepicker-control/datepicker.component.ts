import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'app-datepicker-control',
  templateUrl: './datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent implements ControlValueAccessor, Validator{
    
  control!: AbstractControl;
    
  validate(control: AbstractControl): null {
    this.control = control;
    return null;
  }
  
  @Input()
  errorAdd:boolean = false;

  @Input() title!: string;
    
  @Input() name!: string;
    
  fk:boolean = false; 

  value!: string;

  public onChange = (value: EventTarget) => {};

  public onTouched = () => { this.errorAdd = true; };

  writeValue(value: string): void {
    this.fk = true;
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}

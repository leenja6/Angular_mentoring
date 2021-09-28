import { Component, Input, forwardRef } from '@angular/core'
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms'

@Component({
    selector: 'string-control',
    templateUrl: './string.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => StringComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => StringComponent),
            multi: true,
        }
    ],
})
export class StringComponent implements ControlValueAccessor, Validator {

    control!: AbstractControl
    
    validate(control: AbstractControl): null {
        this.control = control
        return null
    }
    
    @Input()
    title!: string

    @Input()
    name!: string
    
    @Input()
    errorAdd:boolean = false

    value!: string

    public onChange = (value: EventTarget) => { }
    public onTouched = () => { this.errorAdd = true }

    writeValue(value: string): void {
        this.value = value
    }
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {}
}

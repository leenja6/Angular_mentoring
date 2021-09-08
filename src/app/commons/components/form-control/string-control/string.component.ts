import { Component, Input, forwardRef , OnInit, ChangeDetectorRef } from '@angular/core'
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms'

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
export class StringComponent implements ControlValueAccessor, Validator, OnInit {
    
    errors!: any 
    
    constructor(private ref:ChangeDetectorRef) { }
    
    validate(control: AbstractControl): ValidationErrors | null {
        this.errors = control.errors
        return null
    }     

    ngOnInit() {
      this.value 
    }

     
        
    @Input()
    title!: string

    @Input()
    name!: string
    
    @Input()
    errorAdd!:boolean
    

    value!: string

    onChange!: (value: EventTarget) => void
    onTouched!: () => void

    writeValue(value: string): void {
        this.value = value
    }
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }

    
}





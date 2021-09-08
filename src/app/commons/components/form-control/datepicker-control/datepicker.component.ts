import { Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
    selector: 'datepicker-control',
    templateUrl: './datepicker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerComponent),
            multi: true,
        },
    ],
})
export class DatepickerComponent implements ControlValueAccessor{
    
    @Input() title!: string
    @Input() name!: string
    
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

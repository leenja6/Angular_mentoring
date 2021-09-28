import { Component, Input, OnInit } from '@angular/core'
import { FieldErrorsServices } from "../../../services/field-errors.service"

@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html'
})
export class ValidationErrorComponent implements OnInit{

    ngOnInit() { }

    @Input()
    errors: any
    
    @Input()
    errTouched!: boolean

    constructor(public fieldErrorsSrv: FieldErrorsServices) { }

    getErrors(): string[] {
        return this.errors ? Object.keys(this.errors) : []
    }

    getTextvalue(): string  {
        return this.errors ? this.fieldErrorsSrv.getTextValue(this.errors) : ''
    }

    getText(err: string) {
        return this.fieldErrorsSrv.getText(err) 
    }
}

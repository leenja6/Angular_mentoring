import { Component, Input } from '@angular/core';
import { FieldErrorsServices } from "../../../services/field-errors.service";

@Component({
    selector: 'app-validation-error',
    templateUrl: './validation-error.component.html'
})
export class ValidationErrorComponent {

    @Input() errors: any;

    constructor(public fieldErrorsSrv: FieldErrorsServices) { }

    getErrors(): string[] {
        return this.errors ? Object.keys(this.errors) : []
    }
    getText(err: string) {
        return this.fieldErrorsSrv.getText(err);
    }
}

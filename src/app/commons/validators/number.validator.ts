import { FormControl } from '@angular/forms'

export class NumberValidator {
    static numbervalidator(control: FormControl): { [key: string]: boolean } {
        if (/^\s*[\d]+(?:,[\d]+)?\s*$/.test(control.value)) {
            return { numbervalidator: true }
        }

        return { numbervalidator: false }
    }
}

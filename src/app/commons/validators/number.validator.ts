import { FormControl } from '@angular/forms'

export class NumberValidator {
    static numbervalidator(
        control: FormControl
    ): { [key: string]: boolean } | null {
        if (control.value === undefined || control.value === '') {
            return null
        }
        if (/^\s*[\d]+(?:,[\d]+)?\s*$/.test(control.value)) {
            return null
        }

        return { numbervalidator: true }
    }
}

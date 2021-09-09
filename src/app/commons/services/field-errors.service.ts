import { Injectable, OnInit } from '@angular/core'

type ErrorsObject = {
    [key: string]: string
}
@Injectable({ providedIn: 'root' })
export class FieldErrorsServices {

    errorTexts: ErrorsObject = {
        required: 'Поле является обязательным',
        minlength: 'Недостаточная длина поля',
        maxlength: 'Данные превышают максимальную длину',
        numbervalidator: 'Данные не являются числом'
    }

    getText(err: string): string {
        return (err && this.errorTexts.hasOwnProperty(err)) ? this.errorTexts[err] : ''
    }
}

import { Injectable } from '@angular/core';

type ErrorsObject = {
  [key: string]: string
};

@Injectable({ providedIn: 'root' })
  
export class FieldErrorsServices {
    
  errorTexts: ErrorsObject = {
    required: 'Поле является обязательным',
    minlength: 'Минимальная длина поля',
    maxlength: 'Максимальная длина поля',
    numbervalidator: 'Данные не являются числом',
    max: 'Максимальная продолжительность',
    min: 'Минимальная продолжительность',

  };
    
  getText(err: string): string {
    return (err && this.errorTexts.hasOwnProperty(err)) ? this.errorTexts[err] : '';
  }

  getTextValue(err: any): string {
    if (err && err.hasOwnProperty('minlength')) {
      return `${err.minlength.requiredLength} символов`;
    }
    if (err && err.hasOwnProperty('maxlength')) {
      return `${err.maxlength.requiredLength} символов`;
    }
    if (err && err.hasOwnProperty('max')) {
      return `${err.max.max} минут`;
    }
    if (err && err.hasOwnProperty('min')) {
      return `${err.min.min} минута`;
    }
    return '';
  }
}

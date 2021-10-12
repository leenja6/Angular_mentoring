import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldErrorsServices } from 'src/app/commons/services/field-errors.service';
import { ValidationErrorComponent } from '../validation-error/validation-error.component';

describe('ValidationErrorComponent', () => {
 
  let appValidationError: ValidationErrorComponent;
  let fixture: ComponentFixture<ValidationErrorComponent>;
  let fieldErrorsSrv: FieldErrorsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationErrorComponent],
      providers: [FieldErrorsServices],
    });
    
    fieldErrorsSrv = TestBed.inject(FieldErrorsServices);
    fixture = TestBed.createComponent(ValidationErrorComponent);
    appValidationError = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Создание компонента appValidationError', () => {
    expect(appValidationError).toBeDefined();
  });

  it('Если errors содержит значение то функция getErrors отдает масив ключей ошибок', () => {
    appValidationError.errors = { required: true };
    const err = appValidationError.getErrors();
    expect(err).toEqual(['required']);
  });

  it('Если errors несодержит значение то функция getTextvalue вызывает сервис и отдает errors', () => {
    appValidationError.errors = { required: true };
    const err = spyOn(fieldErrorsSrv, 'getTextValue').and.callFake(() => {
      return 'servise';
    });

    appValidationError.getTextvalue();

    expect(err).toHaveBeenCalled();
  });

  it('Если errors несодержит значение то функция getTextvalue отдаст пустую строку', () => {
    appValidationError.errors = false;
    
    const err = appValidationError.getTextvalue();

    expect(err).toBe('');
  });

  it('Если errors содержит значение то функция getErrors отдает пустой масив', () => {
    appValidationError.errors = false;
    const err = appValidationError.getErrors();
    expect(err).toEqual([]);
  });

  it('функция getText вызывает сервис и передает значение error', () => {
    const err = spyOn(fieldErrorsSrv, 'getText').and.callFake(() => {
      return 'servise';
    });
    
    appValidationError.getText('required');

    expect(err).toHaveBeenCalled();
  });
});

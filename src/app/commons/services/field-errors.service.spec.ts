import { FieldErrorsServices } from './field-errors.service';

describe('fieldErrorsServices', () => {

  let fieldErrorsServices: FieldErrorsServices;
        
  beforeEach(() => {
    fieldErrorsServices = new FieldErrorsServices();
  });
    
  it('Метод getText возврвщает текст ошибки', () => {
    const err = fieldErrorsServices.getText('required');
    expect(err).toBe('Поле является обязательным');
  });
    
  it('Метод getText возврвщает пустую строку', () => {
    const err = fieldErrorsServices.getText('requiredd');
    expect(err).toBe('');
  });
  
  it('Метод getTextValue значение для текста с ошибками', () => {
    const err = fieldErrorsServices.getTextValue({ minlength: 50 });
    const err2 = fieldErrorsServices.getTextValue({ maxlength: 50 });
    const err3 = fieldErrorsServices.getTextValue({ max: 50 });
    const err4 = fieldErrorsServices.getTextValue({ min: 50 });  
    expect(err).toContain('символов');
    expect(err2).toContain('символов');
    expect(err3).toContain('минут');
    expect(err4).toContain('минута');  
  });
  
  it('Метод getTextValue возвращает пустую строку', () => {
    const err = fieldErrorsServices.getTextValue({ minlengthh: 50 });
    expect(err).toBe('');
  });
});

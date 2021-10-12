import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Course } from '../../interface/interface';
import { CoursesServices } from '../../services/courses.services';
import { FieldErrorsServices } from '../../services/field-errors.service';
import { FormGroupComponent } from '../form-group/form-group.component';

class CourseStab {
  coursesObj: Course = {
    id: 10,
    name: '',
    date: '',
    length: null,
    description: '',
    authors: [{ lastName: 'texttext', id: 1, name: 'texttext' }],
    isTopRated: false,
  };
}

describe('FormGroupComponent', () => {
 
  let appFormGroup: FormGroupComponent;
  let fixture: ComponentFixture<FormGroupComponent>;
  let coursesServices: CoursesServices;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupComponent],
      providers: [{ provide: CoursesServices, useClass: CourseStab }, FieldErrorsServices, FormBuilder],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    coursesServices = TestBed.inject(CoursesServices);
    fixture = TestBed.createComponent(FormGroupComponent);
    appFormGroup = fixture.componentInstance;
  });
  
  it('Создание компонента appFormGroup', () => {
    expect(appFormGroup).toBeDefined();
  });

  it('Проверка прихода данных от сервиса', () => {
    // Если объект coursesObj существует в сервисе coursesServices то его id = 10
    expect(coursesServices.coursesObj.id === 10).toBeTruthy();
  });

  it('Проверка отоброжения даты в контроле date', () => {
    let date = appFormGroup.formatDate('2016-04-30T18:46:36+00:00');
    expect(date).toBe('2016-04-30');
  });

  it('Проверка отоброжения даты в контроле date', () => {
    let date = appFormGroup.formatDate('2016-04-30T18:46:36+00:00');
    expect(date).toBe('2016-04-30');
  });

  it('Проверка удаления авторов из контрола authors', () => {
    fixture.detectChanges();
    // На данный момент длинна масива с авторами 1
    expect(appFormGroup.form.controls.authors.value.length === 1).toBeTruthy();
    appFormGroup.deleteAuthors(0);
    // После применения метода deleteAuthors длинна масива должна быть 0
    expect(appFormGroup.form.controls.authors.value.length === 0).toBeTruthy();
  });

  it('Проверка добавления control в authors', () => {
    fixture.detectChanges();
    // На данный момент длинна масива с авторами 1
    expect(appFormGroup.form.controls.authors.value.length === 1).toBeTruthy();
    appFormGroup.AddAuthor();
    // После применения метода AddAuthor длинна масива должна быть 2
    expect(appFormGroup.form.controls.authors.value.length === 2).toBeTruthy();
  });

  it('Метод submit Invalid', () => {
    fixture.detectChanges();
    appFormGroup.submit();
    expect(appFormGroup.form.status).toBe('INVALID');
  });
});

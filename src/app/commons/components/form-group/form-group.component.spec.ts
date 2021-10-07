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
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupComponent],
      providers: [{ provide: CoursesServices, useClass: CourseStab }, FieldErrorsServices, FormBuilder],
      imports: [HttpClientModule, AppRoutingModule],
    });
    
    fixture = TestBed.createComponent(FormGroupComponent);
    appFormGroup = fixture.componentInstance;
  });
  
  it('Создание компонента appFormGroup', () => {
    expect(appFormGroup).toBeDefined();
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
    appFormGroup.deleteAuthors(0);
    expect(appFormGroup.form.controls.authors.value.length === 0).toBeTruthy();
  });

  it('Проверка добавления control в authors', () => {
    fixture.detectChanges();
    appFormGroup.AddAuthor();
    expect(appFormGroup.form.controls.authors.value.length === 2).toBeTruthy();
  });

  it('Метод submit Invalid', () => {
    fixture.detectChanges();
    appFormGroup.submit();
    expect(appFormGroup.form.status).toBe('INVALID');
  });
});

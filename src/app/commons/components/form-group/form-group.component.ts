import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../../interface/interface';
import { CoursesServices } from '../../services/courses.services';
import { FieldErrorsServices } from '../../services/field-errors.service';
import { NumberValidator } from '../../validators/number.validator';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
})

export class FormGroupComponent implements OnInit{
  minNameLength: number = 5;

  maxNameLength: number = 100;

  minDescription: number = 20;

  maxDescription: number = 220;

  minLength: number = 1;

  maxLength: number = 500;

  lengthPattern = /\-?\d*\.?\d{1,2}/;

  control: any;
    
  constructor(
    public fb: FormBuilder,
    public coursesServices: CoursesServices,
    public fieldErrorsSrv: FieldErrorsServices,
  ) {}

  coursesObj: Course = this.coursesServices.coursesObj;

  form = this.fb.group({
    name: this.fb.control(this.coursesObj.name, [
      Validators.required,
      Validators.minLength(this.minNameLength),
      Validators.maxLength(this.maxNameLength),
    ]),
    description: this.fb.control(this.coursesObj.description, [
      Validators.required,
      Validators.minLength(this.minDescription),
      Validators.maxLength(this.maxDescription),
    ]),
    date: this.fb.control(this.formatDate(this.coursesObj.date), [Validators.required]),
    length: this.fb.control(this.coursesObj.length, [
      Validators.required,
      Validators.min(this.minLength),
      Validators.max(this.maxLength),
      NumberValidator.numbervalidator,
    ]),
    authors: this.fb.array([]),
    isTopRated: this.fb.control(this.coursesObj.isTopRated),
  });

  formatDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
  }

  get f() {
    return this.form.controls;
  }

  get authors() {
    return this.form.get('authors') as FormArray;
  }
    
  get name() {
    return this.form.get('name');
  }
    
  deleteAuthors(item: number) {
    this.authors.removeAt(item);
  }

  ngOnInit() {
    if (this.coursesObj.id !== -1) {
      for (let i = 0; i < this.coursesObj.authors.length; i++) {
        this.authors.push(this.fb.group({
          id: i,
          name: this.fb.control(this.coursesObj.authors[i].name, [Validators.required]),
          lastName: this.fb.control(this.coursesObj.authors[i].lastName, [Validators.required]),
        }));
      }
    } 
  }

  AddAuthor() {
    const control = this.fb.group({
      id: 0,
      name: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
    });
        
    this.authors.push(control);
  }
    
  submit() {
    if (this.form.valid) {
      if (this.coursesObj.id === -1) {
        const formData = { ...this.form.value };
        this.coursesServices.Addfilm(formData);
                
      } else {
        const formData = { ...this.form.value };
        this.coursesServices.Patchfilm(formData, this.coursesObj.id);
      }
    } else {
      const controls = this.form.controls;
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
    }
  }
}

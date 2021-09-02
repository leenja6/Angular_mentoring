import { Component } from '@angular/core'
import { FormArray, FormBuilder, Validators } from '@angular/forms'
import { CoursesServices } from 'src/app/commons/services/courses.services'
import { NumberValidator } from 'src/app/commons/validators/number.validator'

@Component({
    selector: 'add-courses',
    templateUrl: './add-courses.component.html',
})
export class AddCoursesComponent {
    minNameLength: number = 5
    maxNameLength: number = 100
    minDescription: number = 20
    maxDescription: number = 220
    minLength: number = 1
    maxLength: number = 500
    lengthPattern = /\-?\d*\.?\d{1,2}/

    constructor(
        public fb: FormBuilder,
        public coursesServices: CoursesServices
    ) {}

    form = this.fb.group({
        name: this.fb.control('', [
            Validators.required,
            Validators.minLength(this.minNameLength),
            Validators.maxLength(this.maxNameLength),
        ]),
        description: this.fb.control('', [
            Validators.required,
            Validators.minLength(this.minDescription),
            Validators.maxLength(this.maxDescription),
        ]),
        date: this.fb.control('', [Validators.required]),
        length: this.fb.control('', [
            Validators.required,
            Validators.min(this.minLength),
            Validators.max(this.maxLength),
            NumberValidator.numbervalidator,
        ]),
        authors: this.fb.array([]),
        isTopRated: this.fb.control(false),
    })

    get f() {
        return this.form.controls
    }

    get authors() {
        return this.form.get('authors') as FormArray
    }

    AddAuthor() {
        const control = this.fb.group({
            id: this.fb.control(
                +(Math.random() * (1000000 - 100 + 1) + 100).toFixed(0)
            ),
            name: this.fb.control('', [Validators.required]),
            lastname: this.fb.control('', [Validators.required]),
        })
        this.authors.push(control)
    }

    submit() {
        if (this.form.valid) {
            const formData = { ...this.form.value }
            this.coursesServices.Addfilm(formData)
        } else {
            console.log(this.authors)
        }
    }
}

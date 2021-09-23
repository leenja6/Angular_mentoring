import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BtnAddCoursesComponent } from './components/courses/btn-add-courses/btn-add-courses.component'
import { FilmComponent } from './components/courses/film/film.component'
import { BtnEditDeleteCoursesComponent } from './components/courses/film/btn-edit-delete-courses/btn-edit-delete-courses.component'
import { LoreMoreComponent } from './components/courses/lore-more/lore-more.component'
import { CoursesComponent } from './components/courses/courses.component'
import { CommonsModule } from '../commons/commons.module'
import { AddCoursesComponent } from './components/add-course/add-courses.component'
import { AppRoutingModule } from '../app-routing.module'
import { ErrorComponent } from './components/error/error.component'
import { ConfirmationDeleteComponent } from './components/courses/film/сonfirmation-delete/сonfirmation-delete.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const COMPONENTS = [
    BtnAddCoursesComponent,
    ConfirmationDeleteComponent,
    FilmComponent,
    BtnEditDeleteCoursesComponent,
    LoreMoreComponent,
    CoursesComponent,
    AddCoursesComponent,
    ErrorComponent,
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        CommonsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    entryComponents: [ConfirmationDeleteComponent],
    exports: [...COMPONENTS],
    bootstrap: [CoursesComponent],
})
export class PagesModule {}

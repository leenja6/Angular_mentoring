import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BtnAddCoursesComponent } from './components/courses/btn-add-courses/btn-add-courses.component'
import { FilmComponent } from './components/courses/film/film.component'
import { BtnEditDeleteCoursesComponent } from './components/courses/film/btn-edit-delete-courses/btn-edit-delete-courses.component'
import { LoreMoreComponent } from './components/courses/lore-more/lore-more.component'
import { CoursesComponent } from './components/courses/courses.component'
import { CommonsModule } from '../commons/commons.module'

const COMPONENTS = [
    BtnAddCoursesComponent,
    FilmComponent,
    BtnEditDeleteCoursesComponent,
    LoreMoreComponent,
    CoursesComponent,
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, CommonsModule],
    exports: [...COMPONENTS],
    bootstrap: [CoursesComponent],
})
export class PagesModule {}

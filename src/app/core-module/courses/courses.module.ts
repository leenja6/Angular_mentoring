import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoreMoreComponent } from 'src/app/core-module/courses/lore-more/lore-more.component';
import { BtnAddCoursesComponent } from './btn-add-courses/btn-add-courses.component';
import { BtnEditDeleteCoursesComponent } from './btn-edit-delete-courses/btn-edit-delete-courses.component';
import { CoursesComponent } from './courses.component';
import { FilmComponent } from './film/film.component';

@NgModule({
    declarations: [
        CoursesComponent,
        BtnAddCoursesComponent,
        BtnEditDeleteCoursesComponent,
        FilmComponent,
        LoreMoreComponent,
    ],
    exports: [
        BtnAddCoursesComponent,
        BtnEditDeleteCoursesComponent,
        FilmComponent,
        LoreMoreComponent,
        CoursesComponent,
    ],
    imports: [CommonModule],

    bootstrap: [CoursesComponent],
})
export class CoursesModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';
import { BtnAddCoursesComponent } from './btn-add-courses/btn-add-courses.component';
import { LoreMoreComponent } from './lore-more/lore-more.component';
import { BtnEditDeleteCoursesComponent } from './btn-edit-delete-courses/btn-edit-delete-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    SearchComponent,
    BtnAddCoursesComponent,
    LoreMoreComponent,
    BtnEditDeleteCoursesComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

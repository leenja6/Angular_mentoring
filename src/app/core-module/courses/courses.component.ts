import { Component } from '@angular/core';
import * as lodash from 'lodash';

export enum Category {
  JavaScript,
  TypeScript,
  EcmaScript,
  HTML,
  CSS,
  SCSS
}
interface FilmOne {
  id: number,
  title: string,
  duration: number,
  date: string,
}
interface Filmtwo {
  description: string,
  category: Category
}

export interface Film extends FilmOne, Filmtwo {}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
  
export class CoursesComponent {

  filmList: Film[] = [
    { id: 0, title: 'Video Course 1, Name tag', duration: 5280000, date: '2018-10-14T10:18:09.223', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', category: 1 },
    { id: 1, title: 'Video Course 2, Name tag', duration: 5280000, date: '2018-11-14T10:18:09.223', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident', category: 2 },
    {id: 2, title: 'Video Course 3, Name tag', duration: 5280000, date: '2018-12-14T10:18:09.223', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', category: 3, }
  ]
       
  getDeleteFilm(event: Film): void {
    const indx = lodash.indexOf(this.filmList, event)
    this.filmList = lodash.remove(this.filmList, (n, index) => index !== indx )
 }

  getAllFilms():void {
    this.filmList
  }

  getFilmsCount():void {
    this.filmList.length
  }

  getFilmsTitlesByCategory(category:Category):void {
      this.filmList = this.filmList.filter(c => c.category === category)
  }

  getFilm(title:string):void {
    this.filmList = this.filmList.filter(c => c.title.includes(title))
  }

  filterFilm(title:string, id?:number, date?:string): void {
    this.filmList = this.filmList
      .filter(c => c.title.includes(title))
      .filter(c => c.id === id)
      .filter(c => c.date === date)
  
    console.log(this.filmList)
  }
}

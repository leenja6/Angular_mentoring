import { Component } from '@angular/core';

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
  description: number,
  category: Category
}

export interface Film extends FilmOne, Filmtwo {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
   
  filmList: Film[] = [
    { id: 0, title: 'Video Course 1, Name tag', duration: 1, date: '15 July,2021', description: 20, category: 1 },
    { id: 1, title: 'Video Course 2, Name tag', duration: 2, date: '15 July,2021', description: 22, category: 2 },
    {id: 2, title: 'Video Course 3, Name tag', duration: 3, date: '15 July,2021', description: 25, category: 3, }
  ]

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

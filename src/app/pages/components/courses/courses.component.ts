import { Component } from '@angular/core'
import * as lodash from 'lodash'
import { Category, Film } from 'src/app/commons/interface/interface'
import { filmList } from 'src/app/commons/stub/stub'

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent {
    filmList: Film[] = filmList

    getDeleteFilm(event: Film): void {
        const indx = lodash.indexOf(this.filmList, event)
        this.filmList = lodash.remove(
            this.filmList,
            (n, index) => index !== indx
        )
    }

    getAllFilms(): void {
        this.filmList
    }

    getFilmsCount(): void {
        this.filmList.length
    }

    getFilmsTitlesByCategory(category: Category): void {
        this.filmList = this.filmList.filter((c) => c.category === category)
    }

    getFilm(title: string): void {
        this.filmList = this.filmList.filter((c) => c.title.includes(title))
    }

    filterFilm(title: string, id?: number, date?: string): void {
        this.filmList = this.filmList
            .filter((c) => c.title.includes(title))
            .filter((c) => c.id === id)
            .filter((c) => c.date === date)

        console.log(this.filmList)
    }
}

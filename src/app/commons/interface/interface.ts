export enum Category {
    JavaScript,
    TypeScript,
    EcmaScript,
    HTML,
    CSS,
    SCSS,
}
interface FilmOne {
    id: number
    title: string
    duration: number
    date: string
}
interface Filmtwo {
    description: string
    category: Category
}

interface AUTHOR_MODEL {
    id: number
    name: string
}

export interface Courses {
    id: number
    name: string
    date: string
    length: number
    description: string
    authors: AUTHOR_MODEL
    isTopRated: boolean
}

export interface Film extends FilmOne, Filmtwo {}

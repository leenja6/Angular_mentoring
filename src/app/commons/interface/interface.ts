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

export interface Film extends FilmOne, Filmtwo {}

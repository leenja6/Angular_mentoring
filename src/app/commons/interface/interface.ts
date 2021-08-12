interface AUTHOR_MODEL {
    id: number
    name: string
}

export interface Course {
    id: number
    name: string
    date: string
    length: number
    description: string
    authors: AUTHOR_MODEL
    isTopRated: boolean
}

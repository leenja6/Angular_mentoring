interface AUTHOR_MODEL {
  lastName: string
  id: number
  name: string
}

export interface Course {
  id: number 
  name: string
  date: string
  length: number | null  
  description: string
  authors: [AUTHOR_MODEL]
  isTopRated: boolean
}

export interface Movie {
    id: number
    title: string
    poster_path: string | null
    release_date: string
    overview: string
    vote_average: number
    genre_ids: number[]
    genres?: Genre[]
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface TMDBResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }
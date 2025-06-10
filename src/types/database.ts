export interface Database {
    public: {
      Tables: {
        favorites: {
          Row: {
            id: string
            user_id: string
            movie_id: number
            movie_title: string
            movie_poster: string | null
            movie_year: number | null
            movie_genres: string[] | null
            created_at: string
          }
          Insert: {
            id?: string
            user_id: string
            movie_id: number
            movie_title: string
            movie_poster?: string | null
            movie_year?: number | null
            movie_genres?: string[] | null
            created_at?: string
          }
          Update: {
            id?: string
            user_id?: string
            movie_id?: number
            movie_title?: string
            movie_poster?: string | null
            movie_year?: number | null
            movie_genres?: string[] | null
            created_at?: string
          }
        }
        recommendations: {
          Row: {
            id: string
            user_id: string
            movie_id: number
            movie_title: string
            movie_poster: string | null
            reason: string
            confidence_score: number | null
            created_at: string
          }
          Insert: {
            id?: string
            user_id: string
            movie_id: number
            movie_title: string
            movie_poster?: string | null
            reason: string
            confidence_score?: number | null
            created_at?: string
          }
          Update: {
            id?: string
            user_id?: string
            movie_id?: number
            movie_title?: string
            movie_poster?: string | null
            reason?: string
            confidence_score?: number | null
            created_at?: string
          }
        }
      }
    }
  }
class TMDBService {
    constructor() {
      // Use the Bearer token method (recommended by TMDB)
      this.accessToken = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      this.baseURL = 'https://api.themoviedb.org/3';
    }
  
    async makeRequest(endpoint, params = {}) {
      const url = new URL(`${this.baseURL}${endpoint}`);
      
      // Add query parameters
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value);
        }
      });
  
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`TMDB API Error: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error('TMDB API request failed:', error);
        throw error;
      }
    }
  
    // Search movies
    async searchMovie(query, page = 1) {
      return this.makeRequest('/search/movie', { query, page });
    }
  
    // Get movie details with additional data
    async getMovieDetails(movieId, appendToResponse = 'credits,videos,similar') {
      return this.makeRequest(`/movie/${movieId}`, { 
        append_to_response: appendToResponse 
      });
    }
  
    // Discover movies with filters
    async discoverMovies(filters = {}) {
      return this.makeRequest('/discover/movie', filters);
    }
  
    // Get upcoming movies for 2025
    async getUpcomingMovies(year = 2025) {
      return this.discoverMovies({
        primary_release_year: year,
        sort_by: 'release_date.asc'
      });
    }
  
    // Popular movies
    async getPopularMovies(page = 1) {
      return this.makeRequest('/movie/popular', { page });
    }
  
    // Trending movies
    async getTrendingMovies(timeWindow = 'week') {
      return this.makeRequest(`/trending/movie/${timeWindow}`);
    }
  }
  
  export const tmdbAPI = new TMDBService();
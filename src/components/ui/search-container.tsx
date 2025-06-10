'use client';

import { useState } from 'react';
import { SearchInput } from './search-input';
import { SearchResults } from './search-results';
import { tmdbAPI } from '@/lib/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
}

export function SearchContainer() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await tmdbAPI.searchMovie(query);
      setMovies(response.results.slice(0, 10)); // Get top 10 results
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Search Movies</h2>
          <p className="text-muted-foreground">
            Find your favorite movies and discover new ones
          </p>
        </div>
        <div className="flex justify-center">
          <SearchInput onSearch={handleSearch} isLoading={isLoading} />
        </div>
        <SearchResults movies={movies} isLoading={isLoading} />
      </div>
    </div>
  );
} 
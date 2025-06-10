import { MovieCard } from "./movie-card";
import { Skeleton } from "@/components/ui/skeleton";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
}

interface SearchResultsProps {
  movies: Movie[];
  isLoading: boolean;
}

function MovieCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-[2/3] w-full rounded-t-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function SearchResults({ movies, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No movies found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
} 
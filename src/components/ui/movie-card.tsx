import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface MovieCardProps {
  title: string;
  posterPath: string | null;
  releaseDate: string;
  overview: string;
}

export function MovieCard({ title, posterPath, releaseDate, overview }: MovieCardProps) {
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/placeholder-movie.jpg';

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700">
      <div className="flex gap-8 p-6">
        <div className="relative w-32 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <Image
            src={posterUrl}
            alt={title}
            width={500}
            height={750}
            className="w-full object-cover transition-transform duration-300"
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-grow pt-2">
          <CardHeader className="p-0 space-y-2">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              <b>Released:</b> {new Date(releaseDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-3">
            <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">{overview}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
} 
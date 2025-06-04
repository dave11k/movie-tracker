import Image from "next/image";
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Welcome to Movie Tracker
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Your personal movie collection manager
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for movie cards */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Track Movies</h2>
            <p className="text-gray-400 mb-4">
              Keep track of your watched movies and create your watchlist
            </p>
            <Button variant="outline" className="w-full">
              Start Tracking
            </Button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Discover</h2>
            <p className="text-gray-400 mb-4">
              Find new movies and get personalized recommendations
            </p>
            <Button variant="outline" className="w-full">
              Explore Movies
            </Button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Share</h2>
            <p className="text-gray-400 mb-4">
              Share your movie collection with friends and family
            </p>
            <Button variant="outline" className="w-full">
              Share Collection
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

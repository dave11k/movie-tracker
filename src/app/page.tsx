'use client'

import Image from "next/image";
import { Button } from '@/components/ui/button';
import { SearchContainer } from "@/components/ui/search-container";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/components/auth/withAuth';

function Home() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-4 right-4">
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="text-black border-black hover:bg-black hover:text-white"
          >
            Logout
          </Button>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Welcome to Movie Tracker
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Your personal movie collection manager
        </p>
        <div className="w-full max-w-4xl mx-auto">
          {/* Placeholder for movie cards */}
          <SearchContainer />
          
          {/* <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default withAuth(Home);

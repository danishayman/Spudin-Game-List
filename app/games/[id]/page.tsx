'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { popularGames, upcomingGames, newReleases } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function GameDetailsPage({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const allGames = [...popularGames, ...upcomingGames, ...newReleases];
  const game = allGames.find(g => g.id === params.id);
  
  if (!game) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Game Cover */}
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              {user ? (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors w-full">
                    Add to List
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors w-full">
                    Rate Game
                  </button>
                </div>
              ) : (
                <div className="mt-6">
                  <Link 
                    href="/login"
                    className="block text-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors w-full"
                  >
                    Sign in to Rate
                  </Link>
                </div>
              )}
            </div>
            
            {/* Game Info */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{game.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {game.genres.map((genre) => (
                  <span 
                    key={genre} 
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Release Year</h3>
                  <p className="font-medium">{game.releaseYear}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Type</h3>
                  <p className="font-medium">{game.type}</p>
                </div>
                {game.rating && (
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">Rating</h3>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">{game.rating}/5.0</span>
                    </div>
                  </div>
                )}
                {game.developer && (
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">Developer</h3>
                    <p className="font-medium">{game.developer}</p>
                  </div>
                )}
                {game.publisher && (
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">Publisher</h3>
                    <p className="font-medium">{game.publisher}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Popularity</h3>
                  <p className="font-medium">{game.popularity}K</p>
                </div>
              </div>
              
              {game.description ? (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3">About</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              ) : (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3">About</h2>
                  <p className="text-gray-300 leading-relaxed">
                    No description available for this game yet. This is a placeholder description that would typically contain information about the game's story, gameplay features, and other relevant details.
                  </p>
                </div>
              )}
              
              {game.platforms && game.platforms.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-3">Platforms</h2>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform) => (
                      <span 
                        key={platform} 
                        className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 
'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { popularGames } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function ChartsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Charts</h1>
            
            <div className="bg-gray-900/50 rounded-xl overflow-hidden mb-10">
              <div className="flex p-4 border-b border-gray-800">
                <div className="w-16 text-center">
                  <span className="text-gray-400 font-medium">#</span>
                </div>
                <div className="flex-1">
                  <span className="text-gray-400 font-medium">Game</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-gray-400 font-medium">Year</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-gray-400 font-medium">Score</span>
                </div>
                <div className="w-32 text-center">
                  <span className="text-gray-400 font-medium">Popularity</span>
                </div>
              </div>
              
              {popularGames.map((game, index) => (
                <div 
                  key={game.id}
                  className="flex items-center p-4 hover:bg-gray-800/30 transition-colors border-b border-gray-800 last:border-b-0"
                >
                  <div className="w-16 text-center">
                    <span className="font-semibold text-xl">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <div className="relative h-12 w-10 mr-4 rounded overflow-hidden">
                      <Image
                        src={game.imageUrl}
                        alt={game.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <Link 
                        href={`/games/${game.id}`}
                        className="font-medium hover:text-red-500 transition-colors"
                      >
                        {game.title}
                      </Link>
                      <div className="text-xs text-gray-400 mt-1">
                        {game.genres.join(', ')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-32 text-center">
                    <span>{game.releaseYear}</span>
                  </div>
                  
                  <div className="w-32 text-center">
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">{game.rating || '—'}</span>
                    </div>
                  </div>
                  
                  <div className="w-32 text-center">
                    <span className="text-red-500 font-medium">{game.popularity}K</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                1
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                2
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                3
              </button>
              <span className="text-gray-400 flex items-center px-2">...</span>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                10
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 
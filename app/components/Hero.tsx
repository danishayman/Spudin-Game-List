'use client';

import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would redirect to search results
    console.log('Search for:', searchQuery);
  };
  
  return (
    <section className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Track Your Gaming Journey
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover, track, and share your favorite games with a growing community of passionate gamers.
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="max-w-lg mx-auto mb-10"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for games..."
              className="w-full py-3 px-6 rounded-full bg-gray-900 border border-gray-700 text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {!user ? (
            <Link 
              href="/login" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              Get Started
            </Link>
          ) : (
            <Link 
              href="/my-games" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              My Games List
            </Link>
          )}
          
          <Link 
            href="/about" 
            className="bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full border border-white/30 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
} 
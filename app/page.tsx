'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Navbar component
function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/navbar/logo.png" 
                alt="MYGAMELIST" 
                width={180} 
                height={50} 
                className="h-auto"
                priority
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-[#00E0FF] hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#00E0FF] transition">
              About
            </Link>
            
            {/* Login Button */}
            <Link href="/login" className="flex items-center">
              <div className="bg-transparent rounded-full p-2">
                <Image 
                  src="/navbar/login.png" 
                  alt="Login" 
                  width={32} 
                  height={32}
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
            </Link>
            
            {/* Search Button */}
            <div className="relative">
              <div className="bg-white rounded-full px-4 py-2 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-700 mr-2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="text-gray-700">Game</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Create a separate client component for the search bar
function SearchBar() {
  const [mounted, setMounted] = useState(false);

  // Only show on client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-14 w-full max-w-4xl mx-auto bg-white/20 rounded-full" />;
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        type="search" 
        id="gameSearch"
        aria-label="Search for a game"
        className="block w-full py-4 px-4 pl-14 text-base text-center text-gray-800 border-0 rounded-full bg-white/95 backdrop-blur-sm focus:ring-transparent focus:border-transparent shadow-md"
        placeholder="Find a game" 
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add Navbar */}
      <Navbar />
      
      {/* Hero Section - add padding top to account for navbar */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Banner image as background */}
        <div className="absolute inset-0">
          <Image 
            src="/welcome/banner.jpg" 
            alt="Welcome Banner" 
            fill 
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mt-20 md:mt-40">
          <div className="max-w-7xl mx-auto">
            <p className="text-4xl md:text-5xl font-medium text-white mb-3">Welcome to</p>
            <h1 className="text-7xl sm:text-8xl md:text-8xl font-black text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-none">
              SPUDIN&apos;S GAME LIST
            </h1>
            <p className="text-xl md:text-2xl text-center text-white mb-20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
              Get your game collection and personal rating in one place and share it with the communities!
            </p>
          </div>
          
          <div className="mt-12">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* List of games feature */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">List of games</h2>
                <p className="text-lg text-white/90">
                  Keep track of the games you've played or want to play.
                </p>
              </div>
              <div className="relative aspect-video w-full">
                <Image 
                  src="/features/list-games.webp" 
                  alt="Game list feature" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Write Reviews feature */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Write Reviews</h2>
                <p className="text-lg text-white/90">
                  Share your thoughts and opinions on games you've played.
                </p>
              </div>
              <div className="relative aspect-video w-full">
                <Image 
                  src="/features/write-reviews.jpg" 
                  alt="Review writing feature" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Rate feature */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Give Ratings</h2>
                <p className="text-lg text-white/90">
                  Give your personal rating based on your own experience.
                </p>
              </div>
              <div className="relative aspect-video w-full">
                <Image 
                  src="/features/rating.jpg" 
                  alt="Rating feature" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Community</h2>
          <p className="text-xl mb-10 text-gray-300">
            Connect with us and other gamers across these platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://twitch.tv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#9146FF] rounded-full mb-3">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
                </svg>
              </div>
              <span className="font-medium">Twitch</span>
            </a>
            
            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#5865F2] rounded-full mb-3">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.888-.608 1.283a19.42 19.42 0 0 0-5.83 0C8.75 3.926 8.514 3.43 8.3 3.038a.077.077 0 0 0-.079-.036 20.318 20.318 0 0 0-4.885 1.49A.07.07 0 0 0 3.3 4.546C.572 8.756-.032 12.858.001 16.892c.001.055.026.106.07.138 1.986 1.457 3.913 2.343 5.805 2.928a.08.08 0 0 0 .086-.028c.462-.63.874-1.295 1.226-1.994a.075.075 0 0 0-.041-.105c-.632-.242-1.235-.519-1.807-.811a.08.08 0 0 1-.008-.13c.122-.091.244-.187.36-.281a.07.07 0 0 1 .073-.01c3.69 1.683 7.68 1.683 11.339 0a.07.07 0 0 1 .072.01 8.3 8.3 0 0 1 .36.28.08.08 0 0 1-.007.131c-.573.292-1.175.57-1.807.811a.075.075 0 0 0-.041.105c.36.698.772 1.363 1.225 1.994a.077.077 0 0 0 .087.028c1.899-.585 3.826-1.471 5.812-2.928a.077.077 0 0 0 .069-.138c.105-4.434-.699-8.5-2.957-12.345a.061.061 0 0 0-.036-.034zM8.02 14.184c-1.144 0-2.085-1.054-2.085-2.35 0-1.296.92-2.35 2.085-2.35 1.17 0 2.105 1.065 2.085 2.35 0 1.296-.92 2.35-2.085 2.35zm7.705 0c-1.144 0-2.085-1.054-2.085-2.35 0-1.296.92-2.35 2.085-2.35 1.17 0 2.105 1.065 2.085 2.35 0 1.296-.914 2.35-2.085 2.35z" />
                </svg>
              </div>
              <span className="font-medium">Discord</span>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#24292e] rounded-full mb-3">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Create an account today to start tracking your favorite games, rating titles you've played, and connecting with other gamers.
          </p>
          <Link 
            href="/signup" 
            className="px-8 py-3 bg-white text-red-700 font-medium rounded-full text-lg hover:bg-opacity-90 transition inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

// Feature card component
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Game card component
function GameCard({ title, imageUrl, releaseDate, rating }: { title: string; imageUrl: string; releaseDate: string; rating: number }) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-video relative bg-gray-800">
        {/* Placeholder image - would use real images in production */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
          Game Cover
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">{releaseDate}</span>
          <div className="flex items-center">
            <span className="text-red-500 mr-1">★</span>
            <span className="text-sm font-medium text-white">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

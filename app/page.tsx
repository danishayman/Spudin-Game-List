'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GameSection from './components/GameSection';
import { popularGames, upcomingGames, newReleases } from '@/lib/mockData';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <Hero />
      
      <GameSection 
        title="Popular Games" 
        subtitle="Most played and highly rated games by our community"
        games={popularGames}
        viewAllLink="/popular"
      />
      
      <GameSection 
        title="New Releases 💥" 
        games={newReleases}
        viewAllLink="/new-releases"
        className="bg-black/50"
      />
      
      <GameSection 
        title="Upcoming 🔜" 
        subtitle="Games to look forward to"
        games={upcomingGames}
        viewAllLink="/upcoming"
      />
      
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Gaming Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create your own game list, rate your favorite titles, and connect with other gamers
            who share your passion.
          </p>
          <a 
            href="/login" 
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full text-lg transition-colors inline-block"
          >
            Sign Up Now
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

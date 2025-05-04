import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Banner image as background */}
        <div className="absolute inset-0">
          <Image 
            src="/welcome/banner.jpg" 
            alt="Welcome Banner" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Welcome to Spudin&apos;s Games List
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
            Your community-driven destination to track upcoming games, share ratings, and discover new favorites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login" 
              className="px-8 py-3 bg-red-800 text-white font-medium rounded-full text-lg hover:bg-red-900 transition shadow-lg"
            >
              Sign In
            </Link>
            <Link 
              href="/browse" 
              className="px-8 py-3 bg-black/60 backdrop-blur-sm border-2 border-white text-white font-medium rounded-full text-lg hover:bg-black/80 transition shadow-lg"
            >
              Browse Games
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            Why Join Our Community?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon="🎮"
              title="Track Upcoming Games" 
              description="Stay updated on release dates for the most anticipated games across all platforms."
            />
            <FeatureCard 
              icon="⭐"
              title="Rate & Review" 
              description="Share your opinions and help others discover quality games through honest ratings."
            />
            <FeatureCard 
              icon="👥"
              title="Community Discussions" 
              description="Connect with fellow gamers to discuss gameplay, strategies, and experiences."
            />
          </div>
        </div>
      </section>

      {/* Recent Games Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">
            Recently Added Games
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* These would ideally come from your database */}
            <GameCard 
              title="Elden Ring 2"
              imageUrl="/placeholder-game.jpg"
              releaseDate="Coming 2025"
              rating={4.9}
            />
            <GameCard 
              title="Star Wars: Outlaws"
              imageUrl="/placeholder-game.jpg"
              releaseDate="August 2024"
              rating={4.5}
            />
            <GameCard 
              title="Dragon Age: The Veilguard"
              imageUrl="/placeholder-game.jpg"
              releaseDate="Fall 2024"
              rating={4.7}
            />
            <GameCard 
              title="Metaphor: ReFantazio"
              imageUrl="/placeholder-game.jpg"
              releaseDate="October 2024"
              rating={4.6}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/games" 
              className="px-8 py-3 bg-red-800 text-white font-medium rounded-full text-lg hover:bg-red-900 transition inline-block"
            >
              View All Games
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Create an account today to start tracking your favorite games, rating titles you've played, and connecting with other gamers.
          </p>
          <Link 
            href="/signup" 
            className="px-8 py-3 bg-white text-red-900 font-medium rounded-full text-lg hover:bg-opacity-90 transition inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

// Feature card props interface
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

// Feature card component
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// Game card props interface
interface GameCardProps {
  title: string;
  imageUrl: string;
  releaseDate: string;
  rating: number;
}

// Game card component
function GameCard({ title, imageUrl, releaseDate, rating }: GameCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-video relative bg-gray-200 dark:bg-gray-800">
        {/* Placeholder image - would use real images in production */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg">
          Game Cover
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold dark:text-white">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">{releaseDate}</span>
          <div className="flex items-center">
            <span className="text-red-500 mr-1">★</span>
            <span className="text-sm font-medium dark:text-white">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

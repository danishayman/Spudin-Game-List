import Link from 'next/link';
import GameCard from './GameCard';
import { Game } from '@/lib/mockData';

interface GameSectionProps {
  title: string;
  subtitle?: string;
  games: Game[];
  viewAllLink?: string;
  className?: string;
}

export default function GameSection({
  title,
  subtitle,
  games,
  viewAllLink,
  className = '',
}: GameSectionProps) {
  return (
    <section className={`py-10 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {subtitle && (
              <p className="text-gray-400 mt-1 text-sm">{subtitle}</p>
            )}
          </div>
          
          {viewAllLink && (
            <Link 
              href={viewAllLink} 
              className="text-red-500 hover:text-red-400 text-sm font-medium"
            >
              View All
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              imageUrl={game.imageUrl}
              genres={game.genres}
              releaseYear={game.releaseYear}
              type={game.type}
              popularity={game.popularity}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
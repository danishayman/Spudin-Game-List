import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  genres: string[];
  releaseYear?: number;
  type?: string;
  popularity?: number;
}

export default function GameCard({
  id,
  title,
  imageUrl,
  genres,
  releaseYear,
  type = 'Main Game',
  popularity,
}: GameCardProps) {
  return (
    <div className="group">
      <Link href={`/games/${id}`} className="block">
        <div className="relative overflow-hidden rounded-md bg-gray-900 transition-all hover:scale-[1.02]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={false}
              unoptimized
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
            <div>
              <h3 className="font-semibold text-white line-clamp-1">{title}</h3>
              <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                {genres.join(', ')}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400">
                  {releaseYear && `${releaseYear} | `}{type}
                </span>
                {popularity && (
                  <span className="text-xs font-medium text-red-500">
                    {popularity}K
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="mt-2 text-white font-medium line-clamp-1">{title}</h3>
      </Link>
    </div>
  );
} 
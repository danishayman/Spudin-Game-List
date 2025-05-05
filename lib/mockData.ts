export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  genres: string[];
  releaseYear: number;
  type: string;
  popularity: number;
  description?: string;
  rating?: number;
  platforms?: string[];
  developer?: string;
  publisher?: string;
}

export const popularGames: Game[] = [
  {
    id: 'gta5',
    title: 'Grand Theft Auto V',
    imageUrl: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    genres: ['Shooter', 'Racing', 'Adventure'],
    releaseYear: 2013,
    type: 'Main Game',
    popularity: 4.3,
    rating: 4.7,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    imageUrl: 'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
    genres: ['Role-playing (RPG)', 'Adventure'],
    releaseYear: 2022,
    type: 'Main Game',
    popularity: 4.1,
    rating: 4.8,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    imageUrl: 'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
    genres: ['Shooter', 'Role-playing (RPG)', 'Adventure'],
    releaseYear: 2020,
    type: 'Main Game',
    popularity: 3.8,
    rating: 4.1,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One'],
    developer: 'CD Projekt RED',
    publisher: 'CD Projekt RED',
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    imageUrl: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    genres: ['Shooter', 'Role-playing (RPG)', 'Adventure'],
    releaseYear: 2018,
    type: 'Main Game',
    popularity: 3.5,
    rating: 4.8,
    platforms: ['PC', 'PlayStation 4', 'Xbox One'],
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
  },
  {
    id: 'witcher3',
    title: 'The Witcher 3: Wild Hunt',
    imageUrl: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
    genres: ['Role-playing (RPG)', 'Adventure'],
    releaseYear: 2015,
    type: 'Main Game',
    popularity: 3.4,
    rating: 4.9,
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X|S', 'Xbox One', 'Nintendo Switch'],
    developer: 'CD Projekt RED',
    publisher: 'CD Projekt RED',
  },
];

export const upcomingGames: Game[] = [
  {
    id: 'metal-eden',
    title: 'Metal Eden',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Metal+Eden',
    genres: ['Shooter'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 1.2,
  },
  {
    id: 'fear-fa-98',
    title: 'Fear FA 98',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Fear+FA+98',
    genres: ['Sport', 'Indie'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.8,
  },
  {
    id: 'captain-blood',
    title: 'Captain Blood',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Captain+Blood',
    genres: ['Hack and slash/Beat \'em up', 'Adventure'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 1.5,
  },
  {
    id: 'siegecaster',
    title: 'Siegecaster',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Siegecaster',
    genres: ['Real Time Strategy (RTS)'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.9,
  },
  {
    id: 'doggos-in-dungeon',
    title: 'Doggos in Dungeon',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Doggos+in+Dungeon',
    genres: ['Adventure'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 1.3,
  },
];

export const newReleases: Game[] = [
  {
    id: 'drop-duchy',
    title: 'Drop Duchy',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Drop+Duchy',
    genres: ['Puzzle', 'Strategy', 'Adventure', 'Indie'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.5,
  },
  {
    id: 'stellaris-biogenesis',
    title: 'Stellaris: BioGenesis',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Stellaris:+BioGenesis',
    genres: ['Simulator', 'Strategy'],
    releaseYear: 2024,
    type: 'DLC',
    popularity: 1.7,
  },
  {
    id: 'spear',
    title: 'Spear',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Spear',
    genres: ['Adventure', 'Indie'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.6,
  },
  {
    id: 'septic',
    title: 'Septic',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Septic',
    genres: ['Adventure'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.7,
  },
  {
    id: 'puppet-team',
    title: 'Puppet Team',
    imageUrl: 'https://placehold.co/600x800/1f1f1f/FFF?text=Puppet+Team',
    genres: ['Simulator'],
    releaseYear: 2024,
    type: 'Main Game',
    popularity: 0.4,
  },
]; 
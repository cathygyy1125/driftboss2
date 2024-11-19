export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  path: string;
}

export const games: Game[] = [
  {
    id: 'pocket-drift',
    title: 'Pocket Drift',
    imageUrl: '/images/games/pocket-drift-preview.jpg',
    path: '/games/pocket-drift'
  },
  {
    id: 'car-rush',
    title: 'Car Rush',
    imageUrl: '/images/games/car-rush-preview.jpg',
    path: '/games/car-rush'
  },
  {
    id: 'bike-hero',
    title: 'Bike Hero',
    imageUrl: '/images/games/bike-hero-preview.jpg',
    path: '/games/bike-hero'
  }
];

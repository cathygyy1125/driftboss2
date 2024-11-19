import React from 'react';
import './App.css';
import { GameDescription } from './components/GameDescription';
import { GamePage } from './components/GamePage';
import DriftHuntersPage from './components/DriftHuntersPage';
import DrawTheHillPage from './components/DrawTheHillPage';
import PocketDriftPage from './components/PocketDriftPage';
import CarRushPage from './components/CarRushPage';
import BikeHeroPage from './components/BikeHeroPage';
import FormulaRushPage from './components/FormulaRushPage';
import { GameCard } from './components/GameCard';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameTitle = urlParams.get('title');
  const gameUrl = urlParams.get('url');
  const page = urlParams.get('page');

  if (page === 'drift-hunters') {
    return <DriftHuntersPage />;
  }

  if (page === 'draw-the-hill') {
    return <DrawTheHillPage />;
  }

  if (page === 'pocket-drift') {
    return <PocketDriftPage />;
  }

  if (page === 'car-rush') {
    return <CarRushPage />;
  }

  if (page === 'bike-hero') {
    return <BikeHeroPage />;
  }

  if (page === 'formula-rush') {
    return <FormulaRushPage />;
  }

  if (gameTitle && gameUrl) {
    return <GamePage title={gameTitle} gameUrl={gameUrl} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Drift Boss</h1>
      </header>

      <main className="container mx-auto p-4 space-y-8">
        <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://www.hoodamath.com/mobile/games/drift-boss/game.html"
            title="Drift Boss"
            className="w-full h-full border-0"
            allow="fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <section className="w-full max-w-4xl mx-auto bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Play More Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            <GameCard
              title="Drift Hunters"
              imageUrl="https://images.crazygames.com/games/drift-hunters/cover-1656950639575.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=504"
              onClick={() => {
                window.location.href = '?page=drift-hunters';
              }}
            />
            <GameCard
              title="Draw The Hill"
              imageUrl="/draw-the-hill.jpg"
              onClick={() => {
                window.location.href = '?page=draw-the-hill';
              }}
            />
            <GameCard
              title="Pocket Drift"
              imageUrl="/pocket-drift.jpg"
              onClick={() => {
                window.location.href = '?page=pocket-drift';
              }}
            />
            <GameCard
              title="Car Rush"
              imageUrl="/car-rush.jpg"
              onClick={() => {
                window.location.href = '?page=car-rush';
              }}
            />
            <GameCard
              title="Bike Hero"
              imageUrl="/bike-hero.jpg"
              onClick={() => {
                window.location.href = '?page=bike-hero';
              }}
            />
            <GameCard
              title="Formula Rush"
              imageUrl="/formula-rush.jpg"
              onClick={() => {
                window.location.href = '?page=formula-rush';
              }}
            />
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg">
          <GameDescription />
        </section>
      </main>
    </div>
  );
}

export default App;

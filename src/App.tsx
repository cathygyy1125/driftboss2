import React from 'react';
import './App.css';
import { GameDescription } from './components/GameDescription';
import { GamePage } from './components/GamePage';
import DriftHuntersPage from './components/DriftHuntersPage';
import DrawTheHillPage from './components/DrawTheHillPage';
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

        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Play More Games</h2>
          <div className="flex flex-wrap gap-4">
            <GameCard
              title="Drift Hunters"
              imageUrl="https://images.crazygames.com/games/drift-hunters/cover-1656950639575.png?auto=format%2Ccompress&q=75&cs=strip&ch=DPR&w=504"
              onClick={() => {
                window.location.href = '?page=drift-hunters';
              }}
            />
            <GameCard
              title="DRAW THE HILL"
              imageUrl="/draw-the-hill.jpg"
              onClick={() => {
                window.location.href = '?page=draw-the-hill';
              }}
            />
          </div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg">
          <GameDescription />
        </section>
      </main>
    </div>
  );
}

export default App;

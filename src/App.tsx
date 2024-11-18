import React from 'react';
import './App.css';
import { GameDescription } from './components/GameDescription';
import { GamePage } from './components/GamePage';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameTitle = urlParams.get('title');
  const gameUrl = urlParams.get('url');

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

        <section className="bg-gray-800 p-8 rounded-lg">
          <GameDescription />
        </section>
      </main>
    </div>
  );
}

export default App;

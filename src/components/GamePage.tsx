import React from 'react';

interface GamePageProps {
  title: string;
  gameUrl: string;
}

export function GamePage({ title, gameUrl }: GamePageProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
      </header>
      
      <main className="container mx-auto p-4 space-y-8">
        <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg shadow-xl overflow-hidden">
          <iframe
            src={gameUrl}
            title={title}
            className="w-full h-full border-0"
            allow="fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
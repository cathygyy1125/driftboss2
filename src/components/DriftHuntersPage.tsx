import React from 'react';

const DriftHuntersPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto h-full">
        <iframe 
          src="https://www.hoodamath.com/mobile/games/drift-hunters/game.html?nocheckorient=1"
          className="w-full h-full border-0"
          title="Drift Hunters"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default DriftHuntersPage;

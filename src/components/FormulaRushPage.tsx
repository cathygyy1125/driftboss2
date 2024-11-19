import React from 'react';

const FormulaRushPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto h-full">
        <iframe 
          src="https://www.hoodamath.com/mobile/games/formula-rush/game.html?nocheckorient=1"
          className="w-full h-full border-0"
          title="Formula Rush"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default FormulaRushPage;

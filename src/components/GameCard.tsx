import React from 'react';

interface GameCardProps {
  title: string;
  imageUrl?: string;
  onClick?: () => void;
}

export function GameCard({ title, imageUrl, onClick }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer w-[240px]" onClick={onClick}>
      <div className="h-[120px] relative group">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <span className="text-white text-lg font-semibold">Play Game</span>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
}
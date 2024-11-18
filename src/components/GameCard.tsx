import React from 'react';

interface GameCardProps {
  title: string;
  src: string;
  previewImage?: string;
}

export function GameCard({ title, src, previewImage }: GameCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (previewImage) {
      e.preventDefault();
      window.open(`/game?title=${encodeURIComponent(title)}&url=${encodeURIComponent(src)}`, '_blank');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <a href={src} target="_blank" rel="noopener noreferrer" className="block" onClick={handleClick}>
        {previewImage ? (
          <div className="aspect-video relative group">
            <img 
              src={previewImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-lg font-semibold">Play Game</span>
            </div>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              src={src}
              title={title}
              className="w-full h-full border-0"
              allow="fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
import React from 'react';

const Card = ({ title, imgSrc }) => {
  return (
<div className="bg-black text-white rounded-lg p-4 m-2 w-64 flex-shrink-0 relative overflow-hidden">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="absolute top-2 right-2">
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM7.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5-1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8.003 5h3.994a.999.999 0 011 1v1.003a.999.999 0 01-1 1h-1v1h1a1 1 0 010 2h-1v1h1a.999.999 0 011 1v1.003a.999.999 0 01-1 1H8.003a.999.999 0 01-1-1V15a.999.999 0 011-1h1v-1h-1a1 1 0 010-2h1v-1h-1a.999.999 0 01-1-1V6a.999.999 0 011-1z"/>
        </svg>
      </div>
      <img src={imgSrc} alt={title} className="mt-4 w-full rounded-lg" />
      <div>kasjdksajdkj</div>
    </div>
  );
};

export default Card;

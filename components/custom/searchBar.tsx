import React from 'react';

const categories = [
  { name: 'Lungs', icon: '🔍' },
  { name: 'Breast', icon: '🖼️' },
  { name: 'Liver', icon: '📹' },
  { name: 'Kidney', icon: '🛍️' },
  { name: 'Clavical', icon: '📰' },
];

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-customGray">
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search for..."
          className="w-full py-3 pl-10 pr-4 text-lg bg-white rounded-full shadow-lg focus:outline-none"
        />
        <div className="absolute top-0 left-0 flex items-center h-full pl-3">
          🔍
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`flex items-center px-4 py-2 space-x-2 border rounded-full ${
              category.name === 'SEO' ? 'bg-black text-white' : 'border-black'
            } hover:bg-gray-200`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

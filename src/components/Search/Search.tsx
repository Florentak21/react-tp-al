import React from 'react';

function Search() {
  return (
    <div className="p-4 flex items-center justify-center"> {/* Centrer avec flex */}
      <div className="relative w-full max-w-md ml-6 pr-0 "> {/* Ajouter `ml-4` pour marge gauche */}
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 10l4.35 4.35M21 21l-4.35-4.35M16.24 7.76A6.5 6.5 0 1112 17.5a6.5 6.5 0 014.24-9.74z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Search;

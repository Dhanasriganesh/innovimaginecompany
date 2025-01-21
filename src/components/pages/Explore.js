import React from 'react';
import { useTheme } from '../ThemeContext'; // Import ThemeProvider hook

function Explore() {
  const { isDarkMode } = useTheme(); // Access the theme state

  return (
    <div
      className={`${
        isDarkMode ? ' text-white' : 'bg-white text-gray-900'
      } py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`flex justify-center text-3xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } sm:text-4xl`}
        >
          Explore Us
        </h2>
        <p
          className={`flex justify-center mt-4 text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          From Website Development to 3D Visualization
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <Card
            title="Embrace the Future:"
            buttonText="Get Started"
            imageSrc="sports-car.jpg"
            isDarkMode={isDarkMode}
          />
          <Card
            title="Explore Our Services"
            buttonText="Explore Our Services"
            imageSrc="hiking-boots.jpg"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component
function Card({ title, buttonText, imageSrc, isDarkMode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={`relative ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } rounded-lg px-6 py-10 shadow-lg sm:px-10 sm:py-8`}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4">
          <button
            className={`${
              isDarkMode
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-red-500 hover:bg-red-600'
            } text-white font-bold py-2 px-4 rounded`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

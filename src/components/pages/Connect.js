import React from 'react';
import Social from '../cards/Social';
import { useTheme } from '../ThemeContext'; // Import ThemeProvider hook

function Connect() {
  const { isDarkMode } = useTheme(); // Access theme state

  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`flex justify-center text-3xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } sm:text-4xl`}
        >
          Connect with Us
        </h2>
        <p
          className={`flex justify-center mt-4 text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          Discover how INNOVIMAGINE can transform your digital landscape, from
          website development to app creation and college project.
        </p>
        <div className="flex justify-center mt-4">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Connect;

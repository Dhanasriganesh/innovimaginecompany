import React from 'react';
import logo from "../images/innov.png";
import { useTheme } from '../ThemeContext'; // Theme context for dark mode support

function Digital() {
  const { isDarkMode } = useTheme(); // Access the theme state

  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Revolutionizing the Digital
          </h2>
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            Unlock the Power of Innovative Software Solutions for Your Business
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
            >
              Explore Our Work
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={logo}
            alt="Office Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="crafting-icon.svg"
              alt="Crafting Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">Our Story</h3>
          <p className="mt-2 text-base">Crafting Digital Masterpieces</p>
        </div>

        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="mission-icon.svg"
              alt="Mission Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">About Us</h3>
          <p className="mt-2 text-base">Our Mission</p>
        </div>

        <div
          className={`rounded-lg shadow-lg p-6 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          >
            <img
              src="empowering-icon.svg"
              alt="Empowering Icon"
              className="h-8 w-8"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold">Empowering Businesses</h3>
          <p className="mt-2 text-base">Through Innovative</p>
        </div>
      </div>
    </div>
  );
}

export default Digital;

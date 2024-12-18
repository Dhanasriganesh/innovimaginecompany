import React from 'react';
import Expertise from '../cards/Expertise';
import { useTheme } from '../ThemeContext';

function Discover() {
  const { isDarkMode } = useTheme(); // Accessing the theme state

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
          Discover Our Expertise
        </h2>
        <p
          className={`flex justify-center mt-4 text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          Unlock the Power of Innovative Software
        </p>
        <div>
          <Expertise />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Immersive 3D"
            description="Transform Your Digital"
            imageSrc="immersive-3d.jpg"
            isDarkMode={isDarkMode}
          />
          <Card
            title="Intuitive App"
            description="Elevate Your Digital"
            imageSrc="intuitive-app.jpg"
            isDarkMode={isDarkMode}
          />
          <Card
            title="Seamless Website"
            description="Augue vesticu."
            imageSrc="seamless-website.jpg"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

// Card Component for Reusability
function Card({ title, description, imageSrc, isDarkMode }) {
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
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}

export default Discover;

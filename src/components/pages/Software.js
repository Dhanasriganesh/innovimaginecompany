import React from 'react';
import { useTheme } from '../ThemeContext'; // Import ThemeProvider hook

function Software() {
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
          Innovative Software
        </h2>
        <p
          className={`flex justify-center mt-4 text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          Discover the Power of Innovative Software Solutions: Website
          Development, App Creation, and College Project Assistance
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Card
            title="Explore Website"
            description="Revolutionize Your Online Presence with Our Advanced 3D Design and Visualization Capabilities"
            buttonText="Get in Touch"
            isDarkMode={isDarkMode}
          />
          <Card
            title="Streamline Your App"
            description="Elevate Your College Projects with Our Specialized Assistance in Website Development"
            buttonText="Contact Us"
            isDarkMode={isDarkMode}
          />
          <Card
            title="College Project Support"
            description="Unlock the Full Potential of Your College Projects with Our Comprehensive Solutions in Website Development"
            buttonText="Learn More"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component
function Card({ title, description, buttonText, isDarkMode }) {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div
        className={`relative px-6 py-10 sm:px-10 sm:py-8 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-gray-300">{description}</p>
        <div className="mt-6">
          <a
            href="#"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white ${
              isDarkMode
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Software;

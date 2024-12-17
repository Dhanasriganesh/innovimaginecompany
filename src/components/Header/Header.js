import React, { useState } from 'react';
import { useTheme } from '../ThemeContext'; // Custom hook for theme
import logo from "../images/innov.png";
import { Link } from 'react-router-dom';
import { GiSundial, GiMoonBats } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu and close

function Header() {
  const { isDarkMode, toggleTheme } = useTheme(); // Access theme from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`border-b border-gray-200 shadow-sm transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={40} height={40} />
          <span
            className={`font-bold text-lg ml-2 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Innovimagine
          </span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? (
              <FiX className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            ) : (
              <FiMenu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 items-center">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors duration-300 hover:text-blue-500 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}
          >
            Contact
          </Link>
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
          >
            {isDarkMode ? (
              <GiSundial className="h-6 w-6 text-yellow-500" />
            ) : (
              <GiMoonBats className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className={`sm:hidden flex flex-col items-center space-y-4 py-6 transition-all duration-500 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-900'
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500 dark:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500 dark:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500 dark:text-white"
          >
            Contact
          </Link>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
          >
            {isDarkMode ? (
              <GiSundial className="h-6 w-6 text-yellow-500" />
            ) : (
              <GiMoonBats className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

      )}
        
    </header>
  );
}

export default Header;

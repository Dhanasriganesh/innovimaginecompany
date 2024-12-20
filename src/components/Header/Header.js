import React, { useState } from "react";
import logo from "../images/innov.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu and close
 
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
 
  return (
    <header className="border-b border-gray-700 bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg ml-2 text-gray-200">
            Innovimagine
          </span>
        </div>
 
        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? (
              <FiX className="h-6 w-6 text-gray-200" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-200" />
            )}
          </button>
        </div>
 
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-sm font-medium text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-200 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-200 hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>
      </div>
 
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-6 text-gray-200">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
 
export default Header;
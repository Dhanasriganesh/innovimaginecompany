import React, { useState, useEffect } from "react";
import logo from "../images/innov.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu and close

// Scroll detection for showing/hiding header

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State for header visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-gray-600/20 shadow-sm fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center mr-12">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link to="/"><img src={logo} alt="Logo" width={200} height={100} /></Link>
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
        <nav className="hidden sm:flex space-x-8 items-center gap-14">
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

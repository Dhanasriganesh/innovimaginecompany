import React from 'react';
import { useTheme } from '../ThemeContext'; // Import theme context

function Footer() {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <div className={`py-8 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo and Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-sm">
            © 2024 Innovimagine, Inc. <br />
            All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-2">Our Services</h3>
          <ul>
            <li>Website Development</li>
            <li>App Development</li>
            <li>College Project Assistance</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">
            Syeda Sidra
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-gray-300 transition duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#achievements"
            className="hover:text-gray-300 transition duration-200"
          >
            Achievements
          </a>
          <a
            href="#gallery"
            className="hover:text-gray-300 transition duration-200"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href="#learn-more"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

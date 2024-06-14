import React, { useState } from 'react';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header className="text-md font-extrabold bg-yellow-400 text-blue-600 text-center uppercase leading-loose">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-lg font-bold text-white border-blue-600 hover:border-white hover:text-blue-600">
            Afeez Project
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4 py-2">
            <a href="/" className="text-blue-600 border-2 border-white hover:text-white hover:border-blue-600 px-3">
              WelcomePage
            </a>
            <a href="/home" className="text-blue-600 border-2 border-white hover:text-white hover:border-blue-600 px-3">
              Home
            </a>
            <a href="/books" className="text-blue-600 border-2 border-white hover:text-white hover:border-blue-600 px-3">
              List
            </a>
            <a href="/contact" className="text-blue-600 border-2 border-white hover:text-white hover:border-blue-600 px-3">
              Contact
            </a>
          </nav>

          {/* Mobile Menu (Hamburger Icon) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        id="mdMenu"
        style={{ display: menuVisible ? 'flex' : 'none' }}
        className="md:hidden xl:hidden 2xl:hidden lg:hidden sm:flex flex-col space-y-2 py-2 bg-black w-1/2"
      >
        <button onClick={toggleMenu} className="text-red-600 hover:text-white px-6 ">
          X
        </button>
        <a href="/" className="hover:text-blue-600 text-white px-6">
          WelcomePage
        </a>
        <a href="/home" className="hover:text-blue-600 text-white px-6">
          Home
        </a>
        <a href="/books" className="hover:text-blue-600 text-white px-6">
          List
        </a>
        <a href="/contact" className="hover:text-blue-600 text-white px-6">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
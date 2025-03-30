import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide text-blue-400">
          Luca's Portfolio
        </Link>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Menu ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-md z-50">
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="block px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 hover:bg-gray-700 transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

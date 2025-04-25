import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Teams', to: 'teams' },
  { name: 'Projects', to: 'projects' },
  { name: 'Blog', to: 'blog' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Contact Us', to: 'contact', isButton: true },
];

// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Header on the Left */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-gray-800">
            Kanel Technologies
          </h1>
         
        </div>

        {/* Navbar Links on the Right */}
        <div className="flex space-x-4">
          {links.map(({ name, to, isButton }) =>
            isButton ? (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                {name}
              </Link>
            ) : (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 transition">
                {name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

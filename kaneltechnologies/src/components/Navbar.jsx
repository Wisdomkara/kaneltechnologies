// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Team', to: 'team' }, // Changed "Teams" to "Team" to match section ID
  { name: 'Projects', to: 'projects' },
  { name: 'Blog', to: 'blog' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Contact Us', to: 'contact', isButton: true },
];

export default function Navbar() {
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to track scroll position for navbar background change
  const [scrolled, setScrolled] = useState(false);
  // State to track the active section
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 50px
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest('.mobile-menu-container') &&
        !event.target.closest('.hamburger-button')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Header on the Left */}
        <div className="flex flex-col items-start">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-bold text-gray-800 cursor-pointer hover:text-blue-700 transition-colors duration-300 ">
            Kanel Technologies
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-2">
          {links.map(({ name, to, isButton }) =>
            isButton ? (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                className={`ml-4 px-4 py-2 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-all duration-300 ${
                  activeSection === to ? 'ring-2 ring-blue-300' : ''
                }`}>
                {name}
              </Link>
            ) : (
              <Link
                key={to}
                to={to}
                spy={true}
                smooth={true}
                duration={400}
                className={`text-gray-700 hover:text-blue-600 cursor-pointer hover:bg-blue-50 hover:rounded-xl duration-300 px-3 py-2 transition-all ${
                  activeSection === to
                    ? 'text-blue-600 font-medium bg-blue-50 rounded-xl'
                    : ''
                }`}>
                {name}
              </Link>
            )
          )}
        </div>

        {/* Hamburger Button - Visible only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger-button md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
          aria-label="Toggle navigation menu">
          <span
            className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
          <span
            className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
          <span
            className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
        </button>

        {/* Mobile Menu - Slides in from right */}
        <div
          className={`mobile-menu-container md:hidden fixed top-0 right-0 h-screen bg-white w-64 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            <div className="p-5 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-blue-600">Menu</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close menu">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col p-4 space-y-3 mt-4">
              {links.map(({ name, to, isButton }) => (
                <Link
                  key={to}
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 ${
                    isButton
                      ? 'bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                      : `${
                          activeSection === to
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700'
                        } hover:bg-blue-50 hover:text-blue-600 rounded-lg`
                  } transition-all duration-300 text-left`}>
                  {name}
                </Link>
              ))}
            </div>

            <div className="mt-auto p-4 border-t">
              <div className="text-sm text-gray-500">
                © 2025 Kanel Technologies
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}></div>
        )}
      </div>
    </nav>
  );
}

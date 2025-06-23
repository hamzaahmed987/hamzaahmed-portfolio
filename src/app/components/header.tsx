"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo with subtle animation */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
            >
              Hamza
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center p-3 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {/* Animated Hamburger/Close Icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute top-full right-4 w-72 transition-all duration-300 ease-out z-[100] ${
          isMenuOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mt-2">
            {/* Menu Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Navigation
              </h3>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              <Link
                href="/about"
                className="group flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex-1">About</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/projects"
                className="group flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex-1">Work</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="group flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex-1">Contact</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Menu Footer */}
            <div className="px-6 py-3 bg-gray-50/50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Choose your destination
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
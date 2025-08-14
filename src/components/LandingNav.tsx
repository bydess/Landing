import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#0F1116]/80 border-b border-[#2f68b4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="text-2xl font-bold text-white select-none">PAYZIO</span>
              <DollarSign className="w-6 h-6 text-blue-500" />
            </button>

            <div className="hidden md:flex items-center space-x-6">
              {['/', '/about', '/pricing'].map((path, idx) => {
                const label = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, (c) => c.toUpperCase()) + (path === '/about' ? ' Us' : '');
                return (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleExternalLink('https://app.payzio.io/auth')}
              className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none"
            >
              Login
            </button>

            <button
              onClick={() => handleExternalLink('https://app.payzio.io/auth')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300 focus:outline-none flex items-center justify-center"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 px-4">
            <div className="blur-effect bg-[#1a1d25]/95 border border-blue-500/30 rounded-lg shadow-lg py-2">
              {['/', '/about', '/pricing'].map((path) => {
                const label = path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, (c) => c.toUpperCase()) + (path === '/about' ? ' Us' : '');
                return (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors font-medium focus:outline-none"
                  >
                    {label}
                  </button>
                );
              })}
              <hr className="my-2 border-blue-500/30" />
              <button
                onClick={() => handleExternalLink('https://app.payzio.io/auth')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors font-medium focus:outline-none"
              >
                Login
              </button>
              <button
                onClick={() => handleExternalLink('https://app.payzio.io/auth')}
                className="block w-full text-left px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

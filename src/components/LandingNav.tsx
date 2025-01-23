import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 blur-effect bg-[#0F1116]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-normal text-white">PAYZIO</span>
              <DollarSign className="w-6 h-6 text-[#2f68b4]" />
            </button>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('/pricing')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleExternalLink('https://app.payzio.io/login')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => handleExternalLink('https://app.payzio.io/signup')}
              className="bg-[#2f68b4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3578c4] transition-all duration-300 glow"
            >
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 px-4">
            <div className="blur-effect bg-[#1a1d25]/95 border border-[#2f68b4]/20 rounded-lg shadow-lg py-2">
              <button
                onClick={() => handleNavigation('/')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2f68b4]/10 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2f68b4]/10 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('/pricing')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2f68b4]/10 transition-colors"
              >
                Pricing
              </button>
              <hr className="my-2 border-[#2f68b4]/20" />
              <button
                onClick={() => handleExternalLink('https://app.payzio.io/login')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2f68b4]/10 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleExternalLink('https://app.payzio.io/signup')}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2f68b4]/10 transition-colors"
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
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Navigation data
  const homeNavItems = [
    { id: 'about', label: 'About', action: () => scrollToSection('about') },
    { id: 'screenshots', label: 'Screenshots', action: () => scrollToSection('screenshots') },
    { id: 'tech-blog', label: 'Tech Blog', action: () => scrollToSection('tech-blog') },
  ];

  const legalNavItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'terms', label: 'Terms', to: '/terms' },
    { id: 'privacy', label: 'Privacy', to: '/privacy' },
  ];

  // Common styles
  const navButtonStyle = `text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
    isScrolled ? 'text-gray-300' : 'text-white/90'
  }`;

  const mobileNavStyle = "block w-full text-left text-gray-300 hover:text-purple-400 font-medium";

  const betaButtonStyle = `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    isScrolled
      ? 'bg-purple-600 text-white hover:bg-purple-700'
      : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'
  }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-gray-700' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Yumemi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' ? (
              <>
                {homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={navButtonStyle}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('beta-signup')}
                  className={betaButtonStyle}
                >
                  Join Beta
                </button>
              </>
            ) : (
              <>
                {legalNavItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={navButtonStyle}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 bg-white ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></div>
            <div className={`w-6 h-0.5 my-1 transition-all duration-300 bg-white ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 bg-white ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-700/50">
            {location.pathname === '/' ? (
              <>
                {homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={mobileNavStyle}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('beta-signup')}
                  className="block w-full text-left text-purple-400 font-medium"
                >
                  Join Beta
                </button>
              </>
            ) : (
              <>
                {legalNavItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={mobileNavStyle}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
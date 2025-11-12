import React, { useState, useEffect } from 'react';
import { NavLinkItem } from '../types';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

interface NavbarProps {
  navLinks: NavLinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={handleLinkClick} 
              className={`text-2xl font-bold ${isScrolled || isOpen ? 'text-indigo-400' : 'text-slate-100'} hover:text-indigo-300 transition-colors`}
            >
              Dariel G.
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1"> {/* Reduced space-x slightly for tighter nav */}
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium ${isScrolled || isOpen ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-white'} transition-colors group`} // Added group for pseudo-element styling
                >
                  {link.label}
                  <span className={`absolute bottom-[5px] left-0 w-0 h-[2px] ${isScrolled || isOpen ? 'bg-indigo-300' : 'bg-indigo-400'} transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:right-auto`}></span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className={`p-2 rounded-md ${isScrolled || isOpen ? 'text-slate-300 hover:text-white hover:bg-slate-700' : 'text-slate-200 hover:text-white hover:bg-slate-800/50'} focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-slate-900/95 backdrop-blur-md shadow-xl pb-3 space-y-1 sm:px-3 px-2" id="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
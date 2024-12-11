import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            PS
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <nav className="flex flex-col p-4 space-y-4">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
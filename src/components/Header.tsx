import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 sm:p-6 bg-chess-white dark:bg-chess-black">
        <Link
        to="/"
        className="text-xl sm:text-2xl font-bold text-chess-black dark:text-chess-white  focus:outline-none    rounded"
      >
        CHECKMATE
      </Link>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-chess-gray dark:bg-chess-gray text-chess-white dark:text-chess-black"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </header>
  );
};

export default Header;
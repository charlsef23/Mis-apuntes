import React from 'react';

interface ThemeSwitcherProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
// src/components/ThemeSwitcher.tsx
import React, { useState } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full"
      onClick={toggleTheme}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
"use client"
import { useEffect, useState } from 'react';
import './DarkMode.css'
const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center">
      <label className="theme flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="theme__toggle"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </label>
    </div>
  );
};

export default DarkMode;

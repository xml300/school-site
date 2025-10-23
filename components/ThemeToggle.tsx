import React from 'react';
import useTheme from '../hooks/useTheme';

interface ThemeToggleProps {
  isTransparent?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isTransparent = false }) => {
  const { theme, toggleTheme } = useTheme();

  const colorClasses = isTransparent
    ? 'text-primary-700 hover:bg-slate-200 dark:text-primary-200 dark:hover:bg-primary-700'
    : 'text-primary-200 hover:bg-primary-700';

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full focus-visible-ring transition-colors ${colorClasses}`}
      aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
    >
      {theme === 'dark' ? (
        // Sun Icon for Dark Mode
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon Icon for Light Mode
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
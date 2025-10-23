import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Student Life', path: '/student-life' },
  { name: 'News', path: '/news' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trapping logic
      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift+Tab
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        menuButtonRef.current?.focus();
      };

    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);
  
  const isTransparentOnDesktop = !isScrolled && isHomePage;
  
  const headerClasses = `
    fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled || !isHomePage ? 'bg-primary-800/95 dark:bg-primary-900/95 backdrop-blur-sm shadow-lg' : 'bg-primary-800 lg:bg-transparent dark:bg-primary-900 lg:dark:bg-transparent'}
  `;

  const linkClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible-ring";
  const activeLinkClass = isTransparentOnDesktop
    ? 'font-semibold text-secondary-dark dark:text-white dark:bg-primary-700'
    : 'bg-primary-700 text-white';
  const inactiveLinkClass = isTransparentOnDesktop
    ? 'text-primary-700 hover:text-secondary-dark dark:text-primary-200 dark:hover:text-white'
    : 'text-primary-200 hover:bg-primary-700 hover:text-white';
  
  const mobileLinkClass = "block px-3 py-2 rounded-md text-base font-medium focus-visible-ring";
  const activeMobileLinkClass = "bg-primary-900 text-white";
  const inactiveMobileLinkClass = "text-gray-300 hover:bg-primary-700 hover:text-white";

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 focus-visible-ring rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-colors ${isTransparentOnDesktop ? 'text-secondary-dark dark:text-secondary-light' : 'text-secondary-light'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.087.023l.15.127a1 1 0 001.21-.013L10 6.03l2.303 2.158a1 1 0 001.21.013l.15-.127a.999.999 0 011.087-.023L17.91 6.92a1 1 0 000-1.84l-7-3zM10 8.585L4.92 4.141 10 2.011l5.08 2.13L10 8.585z" />
                  <path d="M2 10a1 1 0 00-1 1v3a1 1 0 001 1h5v1a1 1 0 001 1h4a1 1 0 001-1v-1h5a1 1 0 001-1v-3a1 1 0 00-1-1H2zm15 3H3v-1h14v1z" />
                </svg>
                <span className={`text-xl font-heading font-bold transition-colors ${isTransparentOnDesktop ? 'text-primary-800 dark:text-white' : 'text-white'}`}>Northwood High</span>
              </NavLink>
            </div>
            <nav className="hidden lg:block" aria-label="Main navigation">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="hidden lg:block">
              <ThemeToggle isTransparent={isTransparentOnDesktop} />
            </div>
            <div className="-mr-2 flex lg:hidden">
              <ThemeToggle />
              <button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-primary-800/50 inline-flex items-center justify-center p-2 rounded-md text-primary-200 hover:text-white hover:bg-primary-700 ml-2 focus-visible-ring"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>
      
      {/* Sidebar */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-primary-800 dark:bg-primary-950 shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
      >
          <div className="flex items-center justify-between h-20 px-4 border-b border-primary-700">
            <span id="mobile-menu-heading" className="text-white text-lg font-heading font-bold">Menu</span>
            <button
                onClick={() => setIsMenuOpen(false)}
                type="button"
                className="p-2 rounded-md text-primary-200 hover:text-white hover:bg-primary-700 focus-visible-ring"
                aria-label="Close menu"
            >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeMobileLinkClass : inactiveMobileLinkClass}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
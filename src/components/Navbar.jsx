import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'; // default to dark
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'bio', 'gallery', 'equipment', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for sticky navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <span className="logo-icon">☕</span>
          <span className="logo-text">Melvin Viado</span>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#bio"
              className={`nav-link ${activeSection === 'bio' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('bio'); }}
            >
              Bio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}
            >
              Latte Art
            </a>
          </li>
          <li>
            <a
              href="#equipment"
              className={`nav-link ${activeSection === 'equipment' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('equipment'); }}
            >
              Equipment
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle dark/light theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="mobile-nav-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}

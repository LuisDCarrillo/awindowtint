import { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log("Menu open state:", !isMenuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-logo">
        <img 
          src="/awindowtint-web.png" 
          alt="A Window Tint Logo - Professional Tinting Services" 
          className="logo-image" 
        />
      </div>
      <button 
        className="burger-button" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      {/* Links para pantallas grandes */}
      <div className="navbar-links desktop-links">
        <a href="tel:+13214021863" className="number" aria-label="Call us">
          Call or Text +1 (321) 402-1863
        </a>
        <a href="mailto:awindowtint3171@gmail.com" className="navbar-email" aria-label="Email us">
          awindowtint3171@gmail.com
        </a>
        <a href="https://www.instagram.com/a.window.tinting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/instagram-logo.png" alt="Instagram" className="instagram-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/logo-fc.png" alt="Facebook" className="facebook-icon" />
        </a>
      </div>
      {/* Links para pantallas pequeñas */}
      <div className={`navbar-links mobile-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="tel:+13214021863" className="number" aria-label="Call us">
          Call or Text +1 (321) 402-1863
        </a>
        <a href="mailto:awindowtint3171@gmail.com" className="navbar-email" aria-label="Email us">
          awindowtint3171@gmail.com
        </a>
        <a href="https://www.instagram.com/a.window.tinting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/instagram-logo.png" alt="Instagram" className="instagram-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/logo-fc.png" alt="Facebook" className="facebook-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

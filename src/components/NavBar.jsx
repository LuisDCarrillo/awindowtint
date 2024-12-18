import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Awindowtint-fixed.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <span className="number">Call or Text 321-402-1863</span>
        <a
          href="https://www.instagram.com/a.window.tinting?igsh=c3VseXAzMGZwdXVj"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link instagram-link"
        >
          Instagram
          <img
            src="/instagram-logo.png"
            alt="Instagram"
            className="instagram-icon"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
